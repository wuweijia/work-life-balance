let arr = [4, 5, 3, 2, 6, 1]
var sortArray = function (arr) {
  let defaultVal = arr[0]
  let leftArr = []
  let rightArr = []
  if (arr.length < 2) return arr

  for (let i = 1; i < arr.length; i++) {
    if (defaultVal > arr[i]) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return sortArray(leftArr).concat([defaultVal], sortArray(rightArr))
}

sortArray(arr)
