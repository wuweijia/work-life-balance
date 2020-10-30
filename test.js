function test(a, b) {
  const arr = [a, b]
  let abtest = function () {
    console.log(arr);
  }
  abtest.valueOf = function (a, b) {
    return a + b
  }

  return abtest
}
console.log(test(1,2));
