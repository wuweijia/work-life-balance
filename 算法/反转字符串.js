// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

// 输入：["h", "e", "l", "l", "o"]
// 输出：["o", "l", "l", "e", "h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0;
  let x = s.length - 1
  while (i < x) {
    [s[i], s[x]] = [s[x], s[i]]
    i++
    x--
  }
  return s
};

const res = reverseString(["h", "e", "l", "l", "o"])
console.log(res);

