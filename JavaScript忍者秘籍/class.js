class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    console.log(`my name is ${this.name}`);
    console.log(`my age is ${this.age}`);
  }
}

class superMan extends Person {
  say() {
    console.log(this);

    console.log(`I am superMan ${this.superManname}`);
    console.log(`I am name ${this.name}`);
  }
}

const lili = new Person('lili')
const spiderMan = new superMan('man', 'spiderMan')
console.log(lili.say());
console.log(spiderMan.say());

