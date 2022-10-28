let array = [5, 3, 4, 2, 6, 1]

for (let i = 1; i < array.length; i++) {
  let value = array[i];
  let j = i - 1; // 0
  while(j >= 0 && array[j] > value ) {
    array[j+1] = array[j];
    j--;
  }
  array[j+1] = value;
}

// 主要思想是后面的小值 换给前面的值 没有换的就把最新循环到的最小值赋值给当前循环结束的位置
