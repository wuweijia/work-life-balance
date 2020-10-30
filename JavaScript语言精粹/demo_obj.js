/**
 * 对象
 */

// 对象通过引用来传递，永远不会被复制
const originObj = {
  name: "originObj",
  info: '原对象'
}
var x = originObj;
x.nickname = 'curly'
var nick = originObj.nickname
console.log(nick);
// curly

/**
 * 继承
 */
if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    var F = function () {}
    F.prototype = obj
    return new F()
  }
}
const cpObj = Object.create(originObj)
console.log(cpObj.nickname)
console.log(cpObj.family);
originObj.family = 'moses'
console.log(cpObj.family);
// curl
// undefined
// moses

// 打印j结果说明cpstooge 继承了 stooge的属性

/**
 * 反射 - 检测对象有什么属性，原型链中的任何属性都会有值
 * typeof
 * hasownproperty 不会检查原型链
 */
console.log('---------','反射');

console.log(typeof x.nickname); // string
console.log(typeof x.toString); // function
console.log(originObj.hasOwnProperty('name')); // true
console.log(cpObj.hasOwnProperty('name'));  // false

/**
 * 枚举
 * for in 会列出‘所有’属性 包括function和原型中的属性，所有有必要过滤
 * 那些你不想要的属性，最常用的方法就是hasownproperty 以及 typeof
 */

cpObj.addname = '新加了一个属性'
console.log('---------', '枚举');
for (const key in cpObj) {
  if(cpObj.hasOwnProperty(key)) {
    const element = cpObj[key];
    console.log(element);
  }
}

// 可以通过delete删除属性，他不会删除原型链上的属性，
// 小技巧：可以通过删除属性来‘试探’原型链是否存在某个属性

console.log(cpObj.addname)
delete cpObj.addname
console.log(cpObj.addname)
originObj.addname = '原型addname'
console.log(cpObj.addname)

