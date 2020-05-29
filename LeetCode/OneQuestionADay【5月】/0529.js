/**
 * 0198.打家劫舍
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;

  if (length == 0) return 0;
  if (length == 1) return nums[0];

  const dp = new Array(length);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  let result = dp[1];

  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);

    result = Math.max(result, dp[i]);
  }

  return result;
};

var nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
