function Person(name) {
  this.name = name
  this.say = function() {
    console.log('my name is' + this.name);
  }
}
Person.prototype.dance = function () {
  console.log('dang dang dang')
}
console.log(Person.prototype.constructor == Person); // true

function Dog() {

  this.say = function() {
    console.log('wang wang wang');
  }
}

Dog.prototype.dance = function () {
  console.log('beng beng beng')
}


Person.prototype = new Dog()

const lili = new Person('lili')

console.log(lili.say()); // my name is lili
console.log(lili.dance()); // beng beng beng
console.log(Person.prototype.constructor == Person); // fasle
console.log(Person.prototype.constructor == Dog); // true

console.log(lili instanceof Dog);  // true
console.log(lili instanceof Person);  // true
// 尽管instanceof操作符最常见的用途就是提供一个清晰的方法来确定一个实例是否是由一个特定的构造函数创建的，但并不完全是这样。事实上，它会检查操作符右边的函数的原型是否存在于操作符左边的对象的原型链上


