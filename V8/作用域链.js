
// var name = '极客时间'
// var type = 'global'


// function foo() {
//   var name = 'foo'
//   console.log(name) // foo
//   console.log(type) // global
// }


// function bar() {
//   var name = 'bar'
//   var type = 'function'
//   foo()
// }
// bar()



// var x = 4
// var test
// function test_scope() {
//   var name = 'foo'
//   console.log(name)
//   console.log(type)
//   console.log(test)
//   var type = 'function'
//   test = 1
//   console.log(x)
// }
// test_scope()


var name = '极客时间'
var type = 'global'
function bar() {
  var type = 'function'
  function foo() {
    console.log(type)
  }
  foo()
}
bar()
