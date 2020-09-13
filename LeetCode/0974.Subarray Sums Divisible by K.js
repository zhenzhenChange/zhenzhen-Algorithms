/**
 * 和可被 K 整除的子数组
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(k)
 *
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subArraysDivByK = function (A, K) {
  let count = 0;
  let result = 0;
  const map = new Map([[0, 1]]);

  for (let i = 0; i < A.length; i++) {
    result = (result + A[i]) % K;

    if (result < 0) result += K;

    if (map.has(result)) count += map.get(result);

    map.set(result, (map.get(result) ? map.get(result) : 0) + 1);
  }

  return count;
};

var A = [4, 5, 0, -2, -3, 1];
var K = 5;
console.log(subArraysDivByK(A, K));
