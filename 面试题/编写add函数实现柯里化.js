function add() {
  let arr1 = Array.prototype.slice.apply(arguments)
  function currying() {
    let arr2 = Array.prototype.slice.apply(arguments)
    arr1 = arr2.concat(arr2)
    return currying
  }

  currying.toString = function() {
    let result = 0
    arr1.forEach(element => {
      result+= element
    });
    return result
  }

  return currying
}

console.log(add(1, 2));
console.log(add(1)(2));
console.log(add(1, 2, 3));
console.log(add(1)(2));
