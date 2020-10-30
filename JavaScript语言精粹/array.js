const nums = ['a','b','c',4,5,6]
// delete nums[0] // 会留下一个坑 并不会真正的删除元素的位置
const obj = {
  a: '1',
  b: '2',
  c: '3'
}
// 循环数组
for (const val in nums) {
  console.log(val);
}

// 循环对象
for (const key of Object.keys(obj)) {
  console.log(key);
}

// js里面没有很好的区分 数组 跟 对象
console.log(nums.constructor === Array);  // true
console.log(obj.constructor === Object); // true

// 对象属性有个tostring方法返回一个表示该对象的字符串。
// 借用object方法 可以判断是不是数组
function isarray(value) {
  console.log(Object.prototype.toString.apply(value) === '[object Array]');
}
isarray(nums)

const nums2 = [1,2,3,4,5]
Array.prototype.reduce = function(fn, init) {
  for (let index = 0; index < this.length; index++) {
    init = fn(init, this[index])
  }
  return init
}
console.log(nums2.reduce(function (a, b) { return a + b }, 0));


// 给一个数组赋值字符串属性 不会改变数组本身length
nums2.reduce = 'reduce'
nums2.length // 5
