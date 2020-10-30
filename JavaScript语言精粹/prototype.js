var Mammal = function(name) {
  this.name = name
}
Mammal.prototype.wang = function () {
  console.log('wang wang wang');
}

var Dog = function () {
  this.name = 'dog'
}
var dog = new Dog('dog1')
console.log(dog.constructor);
Dog.prototype = new Mammal

var dog1 = new Dog('dog1')

console.log(dog1.wang());
console.log(dog1.constructor);
