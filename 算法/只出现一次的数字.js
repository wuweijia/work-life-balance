/**
只出现一次的数字
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
 */

// 异或任何数于0异或为任何数 0 ^ n => n
// 相同的数异或为0: n ^ n => 0

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp ^= nums[i];
  }
  return temp;
};

