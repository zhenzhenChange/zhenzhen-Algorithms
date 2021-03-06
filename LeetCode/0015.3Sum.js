/**
 * 三数之和
 * 
 * 时间复杂度：O(n ^ 2)
 * 空间复杂度：O(log n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const len = nums.length;
  if (len < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return result;

    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};

var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
