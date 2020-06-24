/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let res = nums[0] + nums[1] + nums[nums.length - 1];

  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const n2 = nums[left];
      const n3 = nums[right];
      const sum = n1 + n2 + n3;

      sum > target ? right-- : left++;

      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
    }
  }

  return res;
};
