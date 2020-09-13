/**
 * 只出现一次的数字（位运算）
 *
 * 时间复杂度：O(n)
 * 时间复杂度：O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) result ^= nums[i];

  return result;
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
