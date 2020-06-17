/**
 * A[i] + A[j] + i - j = A[i] + i + A[j] - j
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let result = 0;

  // 初始 i = 0
  let maxI = A[0] + 0;

  for (let i = 1; i < A.length; i++) {
    // 当 i = 1 时，初始 j ，i++ 时，下一项 j
    result = Math.max(result, maxI + A[i] - i);

    // 当 i = 1 时，下一项 i
    maxI = Math.max(maxI, A[i] + i);
  }

  return result;
};

var A = [8, 1, 5, 2, 6];
console.log(maxScoreSightseeingPair(A));
