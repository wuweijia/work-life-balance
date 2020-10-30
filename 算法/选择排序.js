let array = [4, 5, 3, 2, 6, 1]

function selectSort(array) {
  let minIndex = null
  let temp = null
  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i
    for (let index = i + 1; index < array.length; index++) {
      if (array[index] < array[minIndex]) {
        minIndex = index
      }
    }
    temp = array[i];
    array[i] = array[minIndex]
    array[minIndex] = temp
  }
  console.log(array);

  return array;
}

selectSort(array)

