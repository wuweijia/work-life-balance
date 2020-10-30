// isNaN有个问题 就是如果传入的 字符串 返回 true
console.log(isNaN('test')) // true
console.log(isNaN('1')) // false
console.log(isNaN(1)) // false
console.log(isNaN(NaN)) // true

function isNaNPlus(value) {
  return typeof value === 'number' && isNaN(value)
}

console.log(isNaNPlus('test')) // false
console.log(isNaNPlus('1')) // false
console.log(isNaNPlus(1)) // false
console.log(isNaNPlus(NaN)) // true
