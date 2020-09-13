/**
 * 求前 N 项和
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  return n && (n += sumNums(n - 1));
};

var n = 3;
console.log(sumNums(n));
