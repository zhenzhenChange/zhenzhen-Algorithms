/**
 * Pow(x, n)
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  return (x ** n).toFixed(5);
};

var x = 2.0;
var n = -2;
console.log(myPow(x, n));
