/**
 * 切割钢条问题（自顶向下、备忘、动态规划）
 *
 * 时间复杂度：O(rodLength ^ 2)
 * 空间复杂度：O(2 * rodLength + 1)
 *
 * @param {*} priceList 价格表
 * @param {*} rodLength 钢条长度
 * @returns {number}
 */
function MemoizedCutRod(priceList, rodLength) {
  const memo = new Array(rodLength + 1).fill(-1);
  return MemoizedCutRodAux(priceList, rodLength, memo);
}

function MemoizedCutRodAux(priceList, rodLength, memo) {
  if (memo[rodLength] >= 0) return memo[rodLength];

  if (rodLength == 0) return (memo[rodLength] = 0);

  let price = -1;

  for (let i = 1; i <= rodLength; i++) price = Math.max(price, priceList[i] + MemoizedCutRodAux(priceList, rodLength - i, memo));

  return (memo[rodLength] = price);
}

const priceList = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

console.log(MemoizedCutRod(priceList, 9));
