/**

给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
  if (!nums.length) return false
  for (let i = 0; i < nums.length; i++) {
    for (let index = i; index < nums.length - 1; index++) {
      if (nums[i] === nums[index + 1]) {
        console.log('true');
        return true
      }
    }
  }
  console.log('false');
  return false
};

var containsDuplicate2 = function (nums) {
  return Array.from(new Set(nums)).length != nums.length;
};


containsDuplicate1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
containsDuplicate2([1, 1, 3, 4, 5, 6, 7, 8, 9, 0])
