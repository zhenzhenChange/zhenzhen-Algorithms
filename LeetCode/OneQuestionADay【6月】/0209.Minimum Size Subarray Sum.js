/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 *
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let sum = 0;
  let left = 0;
  let right = 0;
  const len = nums.length;
  let result = len + 1;

  while (left < len) {
    if (right < len && sum < s) sum += nums[right++];
    else sum -= nums[left++];

    if (sum >= s) result = Math.min(result, right - left);
  }

  if (result == len + 1) return 0;

  return result;
};
