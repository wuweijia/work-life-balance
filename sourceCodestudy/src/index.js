// 如果追踪变化
// function defineReactive(data, key, val) {
//   Object.defineProperty(data, key, {
//     enumerable: true,
//     configurable: true,
//     get: function() {
//       return val
//     },
//     set: function(newVal) {
//       console.log(newVal, val);
//       if (val === newVal) {
//         return
//       }
//       val = newVal
//     }
//   })
// }

// 如何进行依赖收集
// 比如 一个 <div> {{ name }} </div> 使用了 name 如果收集这个name 并且后续还能通知到 模板 name 改变了

// 扩展 defineReactive, 假设我们依赖是一个函数 ，他在 window.target 上
let obj = {}
let window = {}
window.target = function(newName, oldName) {
  console.log(`我之前叫： ${oldName}`);
  console.log(`我现在叫： ${newName}`);
}

// function defineReactive(data, key, val) {
//   let dep = [] // 新增
//   Object.defineProperty(data, key, {
//     enumerable: true,
//     configurable: true,
//     get: function () {
//       dep.push(window.target)
//       return val
//     },
//     set: function (newVal) {
//       if (val === newVal) {
//         return
//       }
//       // 新增
//       for (let index = 0; index < dep.length; index++) {
//         dep[index](newVal, val)
//       }
//       val = newVal
//     }
//   })
// }


// step 2
// 解耦， 把依赖收集 写成一个收集类 Dep 类
// start ./dep.js
// 修改 defineReactive
// import Dep from './Dep'

class Dep {
  static target(target) {
    this.target = target
  }

  constructor() {
    this.subs = []
  }

  // 增加依赖
  addSub(sub) {
    this.subs.push(sub)
  }

  // 删除依赖
  removeSub() {
    remove(this.subs, sub)
  }

  // 触发通知
  notify() {
    const subs = this.subs.slice()
    for (let index = 0; index < subs.length; index++) {
      subs[index].update()
    }
  }

  depend() {
    console.log('target', Dep.target);
    if (Dep.target) {
      Dep.target.addDep(this)
      // this.addSub() //这时候收集的依赖还是 我们自己定义的 想想的   我们需要确定我要收集什么
    }
  }
}

function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
//end


// step 3
// 我们要收集什么? 也就是当属性变化时 我们通知谁?
// Watcher !
// 我们通过一个叫 watcher 的中介 来收集和通知   那我们只需要收集 watcher 就行了
// vue 里面的api
// vm.$watch('a.b.c', () => {
//   console.log('todo something');
// })
// 实现思路就是 watcher 把 'a.b.c' 添加到

class Watcher {
  constructor(vm, cb) {
    this.vm = vm
    this.cb = cb
    if (typeof vm == 'object') {
      Dep.target(this)
      // 模拟vnode执行
      console.log(vm.name)
    }
  }
  update() {
    console.log('执行对应的cb');
    this.cb()
  }
  addDep(dep) {
    dep.addSub(this)
  }
}

function defineReactive(data, key, val) {
  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.depend()
      return val
    },
    set: function (newVal) {
      if (val === newVal) {
        return
      }
      val = newVal
      dep.notify()
    }
  })
}

defineReactive(obj, 'name', 'jack')
new Watcher(obj)
