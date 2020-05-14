/**
 * 切割钢条问题（自底向上、动态规划）
 *
 * 时间复杂度：O(rodLength ^ 2)
 * 空间复杂度：O(rodLength + 1)
 *
 * @param {*} priceList 价格表
 * @param {*} rodLength 钢条长度
 * @returns {number}
 */
function BottomUpCutRod(priceList, rodLength) {
  const dp = new Array(rodLength + 1).fill(0, 0, 1);

  for (let i = 1; i <= rodLength; i++) {
    let price = -1;

    for (let j = 1; j <= i; j++) price = Math.max(price, priceList[j] + dp[i - j]);

    dp[i] = price;
  }

  return dp[rodLength];
}

const priceList = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

console.log(BottomUpCutRod(priceList, 10));
