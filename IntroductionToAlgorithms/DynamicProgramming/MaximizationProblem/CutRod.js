/**
 * 切割钢条问题（自顶向下、递归）
 *
 * 时间复杂度：O(2 ^ rodLength)
 * 空间复杂度：O(rodLength)
 *
 * @param {*} priceList 价格表
 * @param {*} rodLength 钢条长度
 * @returns {number}
 */
function CutRod(priceList, rodLength) {
  if (rodLength == 0) return priceList[rodLength];

  let price = -1;

  for (let i = 1; i <= rodLength; i++) price = Math.max(price, priceList[i] + CutRod(priceList, rodLength - i));

  return price;
}

const priceList = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

console.log(CutRod(priceList, 4));
