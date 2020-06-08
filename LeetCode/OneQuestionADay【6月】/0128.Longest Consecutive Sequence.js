/**
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;

  nums = nums.sort((a, b) => a - b);

  let max = 1;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) continue;

    nums[i] + 1 == nums[i + 1] ? count++ : (count = 1);

    max = Math.max(max, count);
  }

  return max;
};

var nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
