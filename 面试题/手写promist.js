// 正常 new 一个 promise

// const p = new Promise((resolve, reject) => {
//   const status = 0
//   if (status) {
//     resolve(200)
//   } else {
//     reject(404)
//   }
// })

// p.then(res => { console.log(res) }).catch(res => { console.log(res) })

// 通过现有代码 构架大致思路

// 三个状态

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class manualPromise {
  constructor(executor) {
    this.status = PENDING // 默认等待状态
    this.value = undefined // 成功的结果
    this.reason = undefined // 失败的结果
    this.onFulfilledCallBack = []
    this.onRejectedCallBack = []
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulfilledCallBack.forEach(fn => fn())
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallBack.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    let promise2 = new manualPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        onFulfilled(this.value)
      }

      if (this.status === REJECTED) {
        onRejected(this.reason)
      }

      if (this.status === PENDING) {
        this.onFulfilledCallBack.push(() => { onFulfilled(this.value) })
        this.onRejectedCallBack.push(() => { onRejected(this.value) })
      }
    })
    return promise2
  }
}

// 测试上面的代码
const p = new manualPromise((resolve, reject) => {
  setTimeout(() => {
    const status = 1
    if (status) {
      resolve(200)
    } else {
      reject(404)
    }
  }, 1000);
})

p.then(res => { console.log(res) }).then(res => { console.log(res) })


// 实现链式调用不会  握草 我写不出来
