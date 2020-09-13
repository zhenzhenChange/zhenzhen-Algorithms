/**
 * 动态规划（滚动数组）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 滚动数组（从数组优化成常量）
  let prev = 0;
  let curr = 0;
  let result = 1;

  for (let i = 1; i <= n; i++) {
    prev = curr;
    curr = result;
    result = prev + curr;
  }

  return result;

  // 动态规划
  // const dp = [];
  // dp[0] = 1;
  // dp[1] = 1;

  // for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];

  // return dp[n];
};

var n = 5;
console.log(climbStairs(n));
