function Animal(name) {
  this.name = name
  this.type = 'origin'
}

function Dog(name) {
  Animal.call(this, name);
  this.name = name
}

Animal.prototype.song = function() {
  console.log(this.name);
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog


const dog = new Dog('wangwangwang')

console.log(dog.type);

console.log(Animal.prototype.song.call(dog));
