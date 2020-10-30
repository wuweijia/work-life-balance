
// add(1)(2,3)(4).value()  输出 10

// 首先函数也是对象，那他也可有属性和方法， 所以我们可以在函数 curring上面创建一个value属性 值是一个求和函数 用来求和

function add(...num) {
  let currying = function(...next) {
    return add.apply(null, num.concat(next))
  }
  currying.value = function() {
    return num.reduce((x, y) => x + y)
  }
  return currying
}

const total = add(1)(2, 3)(4).value()
console.log(total);
