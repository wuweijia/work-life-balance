// 例如 1.23 *  3.34
function multiplication(a, b) {
  a = a.toString()
  b = b.toString()
  aPointNum = a.split('.')[1].length
  bPointNum = b.split('.')[1].length

  let result = Number(a.replace('.', '')) * Number(b.replace('.', ''))
  return result = result / Math.pow(10, aPointNum * bPointNum)

}

console.log(multiplication(1.23, 3.34));
