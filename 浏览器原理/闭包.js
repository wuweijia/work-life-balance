
function foo() {
  var myName = "极客时间"
  let test1 = 1
  const test2 = 2
  var innerBar = {
    setName: function (newName) {
      myName = newName
    },
    getName: function () {
      console.log(test1)
      return myName
    }
  }
  return innerBar
}
var bar = foo()
bar.setName("极客邦")
bar.getName()
console.log(bar.getName())

// 当 JavaScript 引擎执行到 foo 函数时，首先会编译，并创建一个空执行上下文。在编译过程中，遇到内部函数 setName，JavaScript 引擎还要对内部函数做一次快速的词法扫描，发现该内部函数引用了 foo 函数中的 myName 变量，由于是内部函数引用了外部函数的变量，所以 JavaScript 引擎判断这是一个闭包，于是在堆空间创建换一个“closure(foo)”的对象（这是一个内部对象，JavaScript 是无法访问的），用来保存 myName 变量。接着继续扫描到 getName 方法时，发现该函数内部还引用变量 test1，于是 JavaScript 引擎又将 test1 添加到“closure(foo)”对象中。这时候堆中的“closure(foo)”对象中就包含了 myName 和 test1 两个变量了。由于 test2 并没有被内部函数引用，所以 test2 依然保存在调用栈中。
