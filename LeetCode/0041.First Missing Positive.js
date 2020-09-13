/**
 * 缺失的第一个正数
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // let result;

  // nums.sort((a, b) => a - b);
  // nums = nums.filter(v => v > 0);
  // nums = [...new Set(nums)];

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] != i + 1) {
  //     result = i + 1;
  //     break;
  //   }
  // }

  // return result ? result : nums.length + 1;
  const set = new Set(nums);

  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) return i;
  }
};

var nums = [0, 2, 2, 1, 1];
console.log(firstMissingPositive(nums));
