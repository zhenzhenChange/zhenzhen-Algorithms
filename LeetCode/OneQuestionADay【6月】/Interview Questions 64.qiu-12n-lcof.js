/**
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  // let sum = 0;

  // Array.from({ length: n }, (v, i) => (sum += i + 1));

  // return sum;

  // return (n * (1 + n)) / 2;

  return n && (n += sumNums(n - 1));
};

var n = 3;
console.log(sumNums(n));
