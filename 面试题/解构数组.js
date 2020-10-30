function func(array) {
  let newarray = []
  var funcA = function (array) {
    array.forEach(element => {
      if (Object.prototype.toString.call(element) == '[object Array]') {
        funcA(element)
      } else {
        newarray.push(element)
      }
    });
  }
  funcA(array)
  return newarray
}

function funcB(array) {
  let newarray = []
  return function func(array) {
    array.forEach(element => {
      if (Object.prototype.toString.call(element) == '[object Array]') {
        func(element)
      } else {
        newarray.push(element)
      }
    });
    return newarray
  }(array)
}



console.log(funcB([1,23,21,44,55,[2,43,[3,23,[4,[5]]]]]));
