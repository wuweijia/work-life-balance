### 计算属性 VS 侦听属性

Vue 的组件对象支持了计算属性 computed 和侦听属性 watch 2 个选项
很多人不了解什么时候该用 computed 什么时候该用 watch。
我们接从源码实现的角度来分析它们两者有什么区别。

```js
var vm = new Vue({
  data: {
    firstName: '张',
    lastName: '三'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
  watch: {
    dog: function() {
      console.log('wang wang wang')
    }
  }
})
```

##### computed

计算属性发生在 `vue` 的初始化阶段 `initState` 函数中。
Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染。
初始化 `data、props、computed、watcher` 等等。 然后执行钩子函数 `callHook(vm, 'created')`
所以我们在 created 钩子函数里面可以拿到以上数据!

> /src/core/instance/state.js
```js
export function initState (vm: Component) {
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```

###### 我们主要关注一下 `initComputed` 方法

```js
const computedWatcherOptions = { lazy: true }

function initComputed (vm: Component, computed: Object) {
  // $flow-disable-line
  const watchers = vm._computedWatchers = Object.create(null)
  // computed properties are just getters during SSR
  const isSSR = isServerRendering()

  for (const key in computed) {
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    // 拿到计算属性的每一个 userDef，然后尝试获取这个 userDef 对应的 getter 函数，拿不到则在开发环境下报警告
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        `Getter is missing for computed property "${key}".`,
        vm
      )
    }

    // 接下来为每一个 getter 创建一个 computed watcher
    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }

    // 最后对判断如果 key 不是 vm 的属性，
    // 则调用 defineComputed(vm, key, userDef)，
    // 否则判断计算属性对于的 key 是否已经被 data 或者 prop 所占用
    // 如果是的话则在开发环境报相应的警告。
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        // 当属性 在data 里面定义的时候 我们就会看到这个报错信息
        warn(`The computed property "${key}" is already defined in data.`, vm)
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(`The computed property "${key}" is already defined as a prop.`, vm)
      }
    }
  }
}
```

###### 进入 `defineComputed` 方法

```js
const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

// 其实就是利用 Object.defineProperty 给计算属性对应的 key 值添加 getter 和 setter
export function defineComputed (
  target: any,
  key: string,
  userDef: Object | Function
) {
  // 要不要缓存
  const shouldCache = !isServerRendering()
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef)
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop
    sharedPropertyDefinition.set = userDef.set || noop
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        `Computed property "${key}" was assigned to but it has no setter.`,
        this
      )
    }
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

```

###### 进入 `createComputedGetter` 方法

```js
// import Dep from '../observer/dep'
// watcher 在 scr/core/observer/watcher
// 基本到这里就差不多结束了 他返回一个 函数 computedGetter 它就是计算属性对应的 getter。
 watcher.evaluate = () => {
  this.value = this.get()
  this.dirty = false // 这里设置了 false
}
function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate() //
        // 这里就遗留了一个问题  那什么时候 把 dirty 设置为 true 重新求值呢 ？
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value // dirty 为 false 进来 return val  "缓存"
    }
  }
}
```
可以发现 `computed watcher` 会并不会立刻求值，同时持有一个 `dep` 实例
然后当我们访问 `this.fullName` 就会出发计算属性的 `getter`
他就会拿到 `watcher` 并且执行收集的依赖 `depend()`
最后通过 return this.value 拿到计算属性对应的值。

---

##### watch

侦听属性的初始化也是发生在 Vue 的实例初始化阶段的 initState 函数中，在 computed 初始化之后。
API： `{ [key: string]: string | Function | Object | Array } ` 可以是数组，所以有一个遍历的过程
```js
function initWatch (vm: Component, watch: Object) {
  for (const key in watch) {
    const handler = watch[key]
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}
```


###### createWatcher

```js
function createWatcher (
  vm: Component,
  expOrFn: string | Function,
  handler: any,
  options?: Object
) {
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}

// watch /src/core/instance/state.js
Vue.prototype.$watch = function (
  expOrFn: string | Function,
  cb: any,
  options?: Object
): Function {
  const vm: Component = this
  if (isPlainObject(cb)) {
    return createWatcher(vm, expOrFn, cb, options)
  }
  options = options || {}
  options.user = true // user watch
  const watcher = new Watcher(vm, expOrFn, cb, options)
  if (options.immediate) { // 立即执行配置
    try {
      cb.call(vm, watcher.value)
    } catch (error) {
      handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`)
    }
  }
  return function unwatchFn () {
    watcher.teardown()
  }
}

```

侦听属性 `watch` 最终会调用 `$watch` 方法 这里需要注意一点 `options.user = true`
通过源码可知 `watch` 有四种属性  `deep user lazy sync`
```js
if (options) {
  this.deep = !!options.deep
  this.user = !!options.user
  this.lazy = !!options.lazy
  this.sync = !!options.sync
  this.before = options.before
} else {
  this.deep = this.user = this.lazy = this.sync = false
}
```
说过了 `computed watcher` 我们看 `deep watcher`

```js
get () {
  pushTarget(this)
  let value
  const vm = this.vm
  try {
    value = this.getter.call(vm, vm)
  } catch (e) {
    if (this.user) {
      handleError(e, vm, `getter for watcher "${this.expression}"`)
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value)
    }
    popTarget()
    this.cleanupDeps()
  }
  return value
}
```

> /src/core/observer/traverse.js

traverse 函数的逻辑也很简单，它实际上就是对一个对象做深层递归遍历
因为遍历过程中就是对一个子对象的访问，会触发它们的 `getter` 过程
这样就可以进行一波依赖收集，订阅它们的 `watcher`
这里面明显会有一定的性能开销，所以一定要根据应用场景权衡是否要开启 `deep`

```js
export function traverse (val: any) {
  _traverse(val, seenObjects)
  seenObjects.clear()
}

function _traverse (val: any, seen: SimpleSet) {
  let i, keys
  const isA = Array.isArray(val)
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id
    if (seen.has(depId)) {
      return
    }
    seen.add(depId)
  }
  if (isA) {
    i = val.length
    while (i--) _traverse(val[i], seen)
  } else {
    keys = Object.keys(val)
    i = keys.length
    while (i--) _traverse(val[keys[i]], seen)
  }
}

```

user watcher

通过 `vm.$watch` 创建的 `watcher` 是一个 `user watcher`，它的功能很简单，在对 watcher 求值以会处理一下异常情况

```js
get() {
  if (this.user) {
    handleError(e, vm, `getter for watcher "${this.expression}"`)
  } else {
    throw e
  }
},
```

最后是 `sync watcher` 没啥说的


通过对面源码的分析我们对计算属性和侦听属性的实现有了深入的了解
计算属性本质上是 `computed watcher`
而侦听属性本质上是 `user watcher`。

就应用场景而言，计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。

#### 最后的最后

大家在面试的时候经常会说，computed 有缓存 watch 没有缓存
那你有没有思考过 computed 是怎么实现缓存的？

也就是我在 `createComputedGetter` 函数写了注释的地方，我们一起回顾一下

```js
function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate() //
        // 这里就遗留了一个问题  那什么时候 把 dirty 设置为 true 重新求值呢 ？
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value // dirty 为 false 进来 return val  "缓存"
    }
  }
}

watcher.evaluate = () => {
  this.value = this.get()
  this.dirty = false // 这里设置了 false
}

```
这里面当他求值了之后，把 dirty 设置了 false 这说明目前的情况我无论执行多少次
都不会进 `watcher.evaluate()` 求值这个方法，而是直接返回 `watcher.value`

那么什么时候把 `dirty` 设置为 `true` 呢  我们可反向推理
先搜索代码中设置为 `ture` 的地方， 我们发现他在 `update` 函数里面
```js
update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true
  } else if (this.sync) {
    this.run()
  } else {
    queueWatcher(this)
  }
}
```

这里又要涉及到另外一个知识点  依赖收集 和 触发更新 的  Dep 大概意思就是当一个值被访问的时候
会收集用这个值的地方 我们叫做"依赖"，然后当这个值被set新值的时候，会执行收集到的"依赖"
出发的就是上面的 update 导致  this.dirty = true
```js
// Dep 里面的一段代码 执行收集到的"依赖"
notify () {
  const subs = this.subs.slice()
  for (let i = 0, l = subs.length; i < l; i++) {
    subs[i].update()
  }
}
```
顺序
1、 调用计算 watcher 的 update
2、 调用渲染 watcher 的 update

然后就会触发重新求值
```js
if (watcher.dirty) {
  watcher.evaluate() //
}
watcher.evaluate = () => {
  this.value = this.get()
  this.dirty = false
}
```

大致就是这样，前提可能需要理解一点依赖收集的过程。
