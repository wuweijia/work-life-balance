class A {
  constructor(a) {
    this.a = a;
    this.blue = 'blue';
  }
  say() {
    console.log('----say')
  }
  static myMethod(msg) {
    console.log('Astatic', msg);
  }
  myMethod(a) {
    console.log('A', a);
  }
}

class B extends A {
  constructor() {
    super()
  }
  sing() {
    console.log('sing', super.myMethod('1'));
  }

  static myMethodB(a) {
    super.myMethod(a)
  }

  myMethodB(a) {
    super.myMethod(a)
  }
}

a = new A(1)
b = new B()

// console.log(B.myMethodB('111')); // 静态方法中 指向父类
// console.log(b.myMethodB('2333')); // 普通的实例方法指向 原型

// 以下值的输出说明 父类中 constructor 默认的值可以被继承，实例的不能被继承
console.log(a.a); // 1
console.log(a.blue); // blue
console.log(b.a); // undefined
console.log(b.blue); // blue
console.log(b.say()); // ----say
