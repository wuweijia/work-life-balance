// 继承就是一个对象可以访问另外一个对象中的属性和方法，在JavaScript 中，我们通过原型和原型链的方式来实现了继承特性。
// eg

// var animal = {
//   type: "default",
//   color: "default",
//   getInfo: function() {
//     return `Type is: ${this.type}，color is ${this.color}.`
//   }
// }

// var dog = { type: "Dog", color: "Black", }

// dog.__proto__ = animal

// console.log(dog.getInfo());


// 构造函数


function DogFactory(type, color) {
  this.type = type
  this.color = color
}


var dog = new DogFactory('Dog', 'Black')


console.log(DogFactory.__proto__) // [Function]
console.log(DogFactory.__proto__.__proto__) // {}
console.log(DogFactory.prototype); // DogFactory {}
console.log(DogFactory.prototype.__proto__); // {}
console.log(DogFactory.__proto__.__proto__ === DogFactory.prototype.__proto__); // true
