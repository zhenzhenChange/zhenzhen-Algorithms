/**
 * 除自身以外数组的乘积
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  /* 耗时长
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      const temp = nums[i];

      nums[i] = 1;

      result[i] = nums.reduce((prev, curr) => prev * curr);

      nums[i] = temp;
    }

    return result; 
  */

  const length = nums.length;
  const result = new Array(length);

  result[0] = 1;
  for (let i = 1; i < length; i++) result[i] = nums[i - 1] * result[i - 1];

  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= R;
    R *= nums[i];
  }

  return result;
};

var nums = [1, 0];
console.log(productExceptSelf(nums));
