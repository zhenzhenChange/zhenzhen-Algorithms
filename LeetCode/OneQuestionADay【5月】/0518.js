/**
 * 0152.乘积最大子数组
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = 0;

  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const mx = max;
    const mn = min;

    max = Math.max(...[mx * nums[i], nums[i], mn * nums[i]]);
    min = Math.min(...[mn * nums[i], nums[i], mx * nums[i]]);

    result = Math.max(max, result);
  }

  return result;
};

var nums = [2, -5, -2, -4, 3];
console.log(maxProduct(nums));
