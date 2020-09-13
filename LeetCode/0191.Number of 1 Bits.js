/**
 * 位 1 的个数
 *
 * @param {number} n 一个正整数
 * @return {number}
 */
var hammingWeight = function (n) {
  const ary = n.toString(2).match(/1/g);
  return ary ? ary.length : 0;
};

var n = 0;
console.log(hammingWeight(n));
