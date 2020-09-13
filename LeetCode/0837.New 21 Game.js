/**
 * 新 21 点
 *
 * 时间复杂度：O(min(N, K + W))
 * 空间复杂度：O(K + W)
 *
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
  const dp = new Array(K + W + 1).fill(0.0);

  for (let i = K; i <= N && i < K + W; i++) dp[i] = 1.0;

  dp[K - 1] = (1.0 * Math.min(N - K + 1, W)) / W;

  for (let i = K - 2; i >= 0; i--) dp[i] = dp[i + 1] - (dp[i + W + 1] - dp[i + 1]) / W;

  return dp[0].toFixed(5);
};

var N = 28;
var K = 17;
var W = 10;

console.log(new21Game(N, K, W));
