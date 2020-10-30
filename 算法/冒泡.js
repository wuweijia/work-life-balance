let array = [4, 5, 3, 2, 6, 1]

for (let i = 0; i < array.length; i ++ ) {
  for (let index = 0; index < array.length; index++) {
    const tmp = array[index];
    if (tmp > array[index + 1]) {
      array[index] = array[index + 1]
      array[index + 1] = tmp
    }
  }
}
console.log(array);
