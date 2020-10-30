// 函数的四种调用中this的不同
// 如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构造函数的this将被丢弃。● 但是，如果构造函数返的是非对象类型，则忽略返回值，返回新创建的对象。
const obj = {
  name: 'obj',
  age: '10'
}

const Fnobj = function() {
  this.name = 'fnobj'
  return obj
}

const newObj = new Fnobj()

console.log(newObj.age);
