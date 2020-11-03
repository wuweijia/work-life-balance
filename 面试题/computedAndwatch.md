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
//  watcher.evaluate = () => {
//   this.value = this.get()
//   this.dirty = false
// }
function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
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

`{ [key: string]: string | Function | Object | Array } ` 可以是数组，所以有一个遍历的过程
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
```
