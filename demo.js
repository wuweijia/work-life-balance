function toArray(list, start) {
  start = start || 0
  let i = list.length - start // 5-2
  const ret = new Array(i) // 3 empty items
  while (i--) {
    console.log(i, start);
    ret[i] = list[i + start]
  }
  return ret
}

console.log(toArray([1,2,3,4,5], 2));
