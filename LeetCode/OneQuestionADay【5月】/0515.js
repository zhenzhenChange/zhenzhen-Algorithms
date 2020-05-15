/**
 * 0560.和为 K 的子数组（滑动窗口算法）
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let result = 0;
  const map = new Map([[0, 1]]);

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];

    if (map.has(result - k)) count += map.get(result - k);

    map.has(result) ? map.set(result, map.get(result) + 1) : map.set(result, 1);
  }

  return count;
};

var k = 0;
var nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(subarraySum(nums, k));
