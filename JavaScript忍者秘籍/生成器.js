function* GeneratorNum() {
  var i = 0
  while (true) {
    console.log('1');
    yield ++i
    console.log('2');
  }
}

const add = GeneratorNum()

console.log(add.next());
console.log(add.next());

// 1
// { value: 1, done: false }
// 2
// 1
// { value: 2, done: false }
// 注意 标准函数中一般不应该书写无限循环的代码。但在生成器中没问题！当生成器遇到了一个yield语句，它就会一直挂起执行直到下次调用next方法，所以只有每次调用一次next方法，while循环才会迭代一次并返回下一个ID值。

