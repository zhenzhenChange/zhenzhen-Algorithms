/**
 * 切割钢条问题（自底向上、动态规划、扩展生成最优解组合方案）
 *
 * 时间复杂度：O(2 * (rodLength ^ 2))
 * 空间复杂度：O(rodLength + 1)
 *
 * @param {*} priceList 价格表
 * @param {*} rodLength 钢条长度
 * @returns {number}
 */
function ExtendedBottomUpCutRod(priceList, rodLength) {
  const dp = new Array(rodLength + 1).fill(0, 0, 1);
  const scheme = new Array(rodLength + 1).fill(0, 0, 1);

  for (let i = 1; i <= rodLength; i++) {
    let price = -1;

    for (let j = 1; j <= i; j++) {
      if (price < priceList[j] + dp[i - j]) {
        price = priceList[j] + dp[i - j];
        scheme[i] = j;
      }
    }

    dp[i] = price;
  }

  return { dp, scheme };
}

const priceList = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

console.log(ExtendedBottomUpCutRod(priceList, 10).dp);
console.log(ExtendedBottomUpCutRod(priceList, 10).scheme);
