/**
 * 0287.寻找重复数
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return nums[i];

    set.add(nums[i]);
  }
};

var nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));