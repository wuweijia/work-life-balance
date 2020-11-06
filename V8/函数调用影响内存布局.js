
// 1
function foo() {
  foo() // 是否存在堆栈溢出错误?
}

// 2
function foo() {
  setTimeout(foo, 0) // 是否存在堆栈溢出错误?
}
// 3
function foo() {
  return Promise.resolve().then(foo)
}
foo()
