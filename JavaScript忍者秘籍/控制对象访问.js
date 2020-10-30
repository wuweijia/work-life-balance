const person = {
  data: {
    age: 11,
    name: 'xiaoming'
  },
  get age() {
    console.log('访问年龄');
    return this.data.age
  },
  set age(val) {
    console.log('设置年龄');
    this.data.age = val
  },
}


console.log(person.age);
console.log(person.age = 12);
console.log(person.age);


const person2 = {
  name: 'xiaohua'
}

const xiaohua = new Proxy(person2, {
  get: (target, key) => {
    console.log(target, key);
    if (key in target) {
      return target[key]
    }
    console.log('错误的键');
  },
  set: (target, key, value) => {
    console.log(target, key, value);
  }
})

console.log(xiaohua.name);
console.log(xiaohua.age);
