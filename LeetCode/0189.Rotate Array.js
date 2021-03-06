/**
 * 旋转数组
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function (nums, k) {
  /* 1：循环从结尾拿出来再放到开头
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }
  */

  // 2：全部截取下来再放到开头
  nums.unshift(...nums.splice(nums.length - k));
};
