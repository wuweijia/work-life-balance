// 模拟 window.target
let window = {}
window.target = function (newName, oldName) {
  console.log(`我之前叫： ${oldName}`);
  console.log(`我现在叫： ${newName}`);
}

export default class Dep {
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
    if (window.target) {
      this.addSub(window.target) //这时候收集的依赖还是 我们自己定义的 想想的   我们需要确定我要收集什么
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
