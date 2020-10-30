// 一个简单的闭包
// es5
// class Count {
//   constructor() {
//     let i = 0
//     this.add = function () {
//       i++
//       return i
//     }
//   }
// }

// 构造器函数
function Count() {
  let i = 0
  this.add = function () {
    i++
    return i
  }
}

const add1 = new Count()
const add2= new Count()

console.log(add1.add());
console.log(add1.add());
console.log(add1.add());

console.log(add2.add());
console.log(add2.add());
console.log(add2.add());


// 闭包是JavaScript作用域规则的副作用。当函数创建时所在的作用域消失后，仍然能够调用函数
// 他能创建独立的空间是使用他的关键
// 防抖函数 就是通过闭包的特性 来实现的
