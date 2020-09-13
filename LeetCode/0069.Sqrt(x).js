/**
 * X 的平方根（内置函数）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

var x = 8;
console.log(mySqrt(x));
