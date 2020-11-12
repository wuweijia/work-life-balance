// map
let nums = [1, 2, 3, 4, 5]
const obj = { val: 1 }

const res = nums.map((item, index) => {
  return item + index
}, obj)

console.log(res);

// reduce
// 多个数的加和
let newNums = nums.reduce(function (preSum, curVal, array) {
  return preSum + curVal;
});
console.log('newNums', newNums)

// filter
// 保留奇数项
let oddNums = nums.filter(item => item % 2);
console.log('oddNums', oddNums);

// sort
// 一个用于比较的函数，它有两个默认参数，分别是代表比较的两个元素。
const res2 = nums.sort(function (a, b) {
  return b - a
})
console.log('res2', res2);

nums.forEach((item, index) => {
  console.log(item, index);
  return;//无效
})

console.log('indexOf', nums.indexOf(2));
console.log('findindex', nums.findIndex(item => item === 2));

let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]
let str = JSON.stringify(ary);

str = str.replace(/(\[|\])/g, '')
str = '[' + str + ']';
ary = JSON.parse(str);
console.log(str);
