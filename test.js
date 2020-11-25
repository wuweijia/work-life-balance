function objectFactory() {
  var obj = {},
    Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  console.log(ret);
  return typeof ret === 'object' ? ret : obj;
};
function fnf() {
  this.x = 123
}

let a2 = objectFactory(fnf) // 模拟 new fnf()
console.log(a2.x) // 123
