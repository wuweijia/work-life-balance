// 求代码输出，并说出为什么
var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': () => {},
  'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj)

// obj有长度，相当于类数组，调用数组的push，会在数组的最后加一项，第一次调用，相当于长度变为3，那么下标为2的那一项被赋值为1，下标是2，当其作为对象的key值的时候，会隐式调用toString方法转为字符串2，则和obj本来有的key '2'相同，原来的key为2的value就被覆盖了。以此类推后面的2个push。
