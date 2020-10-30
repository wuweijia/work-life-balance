// # 函数

//   在JavaScript中一共有四种调用模式：

// 1. 方法调用
// 2. 函数调用
// 3. 构造器调用
// 4. Apply调用

// ## 方法调用

//   当一个函数被当做一个对象的属性时，我们称他为一个方法，当一个方法被调用时，**::this::**指向该对象

const obj = {
  value: 1,
  func: () => {
    this.value ++
  }
}
// func 方法可以通过this 访问到自己对象属性

// ## 函数调用模式

const add = function(a, b) {
  return a + b
}

const sum = add(1, 2)
console.log(sum);


  // 此函数的调用模式中 this被绑定到全局对象，经验来看这是一个错误的设计，理想情况下this应该指向调用他的内部函数中
obj.funcB = function () {
  const sub = function() {
    this.value --  //通常我们希望this指向的是obj 实际这里的this指向的是全局对象
  }
  sub() //以函数的形式调用
}

obj.funcB = function () {
  const that = this
  const sub = function() {
    that.value --  //通常我们希望this指向的是obj 实际这里的this指向的是全局对象， 很多人认为这是一个设计上的失误。 所以通常用that 引用 this
  }
  sub() //以函数的形式调用
}

// ## 构造器调用模式

const Person = function(age, sex) {
  this.age = age
  this.sex = sex
}

const people = new Person(16, 'male');

console.log(people.age);


// ## Apply模式
// javascript是一门函数式面向对象语言，所以函数可以拥有方法

const arr = [3, 4]
const result = add.apply(null, arr)
console.log(result);

const getstatus = {
  getstatusfunc: function() {
    return this.status
  }
}

const statusObj = {
  status: "ok"
}
// 借用 getstatus 的方法 getstatusfunc 给 statusObj
console.log(getstatus.getstatusfunc.call(statusObj));
console.log(getstatus.getstatusfunc.apply(statusObj));




// result: 7


// ## 返回值
// 函数一定是有返回值的，要么是指定`return`要么返回一个 `undefined`
// 当时`return`被执行，函数将不再继续向下执行，会将执行权交给调用该函数的程序
// ::如果函数通过`new`关键字调用，并且返回值不是对象，将返回this::

// ## 扩展
// 通过`prototype`扩展方法

Function.prototype.addMethod = function(name, func) {
  this.prototype[name] = func
  return this
}

// 通过给Function.prototype添加method方法 以后增加方法就不需要prototype这个关键字了

// ## 闭包
const myobject = (function(){
  let val = 0
  return {
    increment: function() {
      val++
    },
    getValue: function() {
      console.log(val);
      return val
    }
  }
}())

myobject.increment()
myobject.increment()
myobject.increment()
myobject.getValue()


// 递归
// 汉诺塔
function hanNuoTa(n, x, y, z, type) {
  if (n === 1) {
    console.log(x + "---->" + z)
  }
  else {
    hanNuoTa(n - 1, x, z, y, 'a');
    console.log(x + "---->" + z);
    hanNuoTa(n - 1, y, x, z, 'b');
  }
}

hanNuoTa(3, 'A', 'B', 'C', 'init');



// [9, 2, 5, 4, 8, 1, 3, 6, 7]
// ‘超级’汉诺塔 实际不是汉诺塔 但是类似
console.log('--------------');

let temp = []
let target = []
const superhanoi = function(src, temp, target) {
  if (src && src.length >= 1) {
    if (!target.length) {
      target.unshift(src.shift())
      console.log('target为空 添加一个盘到target', target);
      console.log('剩下的盘', src);
    }
    if (!temp.length) {
      temp.unshift(src.shift())
      console.log('temp为空 添加一个盘到temp', temp);
      console.log('剩下的盘', src);
    }
    if (target.length === 1) {
      if (target[0] > temp[0]) {
        target.unshift(temp.shift())
      } else {
        target.push(temp.shift())
      }
    } else {
      let maxindex = 'empty'
      for (let index = 0; index < target.length; index++) {
        const element = target[index];
        if (element > temp[0]) {
          maxindex = index
          break
        }
      }
      if (maxindex !== 'empty') {
        const popdata = target.splice(0, maxindex)
        temp = popdata.concat(temp)
        console.log('把小于temp的targetpan添加到 temp', temp);
        target = temp.concat(target)

        temp = []
      } else {
        target.push(temp.shift())
      }
    }
    console.log('----------------', target);
    superhanoi(src, temp, target)
  }
}
superhanoi([1,2,3,4,5,6,7,8,9], [], [])

// 柯里化
Function.prototype.curry = function() {
  // 跟数组老哥借个方法 来把伪数组变成真数组
  var args = Array.prototype.slice.apply(arguments)
  var that = this
  return function() {
    return that.apply(null, args.concat(Array.prototype.slice.apply(arguments)))
  }
}

var add1 = add.curry(1)
console.log(add1(7));


// 级联 通过级联降低接口耦合
var math = {
  add: function(a, b) {
    console.log(a+b);
    return this
  },
  sub: function (a, b) {
    console.log(a - b);
    return this
  }
}

math.add(1, 2).sub(3, 1)


// 斐波那契数列
// 通过递归将问题分解 然后变成 小问题+小问题

const fibonacci = function(n) {
  if (n < 2) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const factorial = function(n) {
  if (n < 3) {
    return n
  } else {
    return n * factorial(n - 1)
  }
}
