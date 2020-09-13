/**
 * 顺时针打印矩阵
 * 
 * 时间复杂度：O(m*n)
 * 空间复杂度：O(1)
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 0) return [];

  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;

  const result = [];
  const size = matrix.length * matrix[0].length;

  while (result.length != size) {
    for (let i = left; i <= right; i++) result[result.length] = matrix[top][i];
    top++;

    for (let i = top; i <= bottom; i++) result[result.length] = matrix[i][right];
    right--;

    if (result.length == size) return result;

    for (let i = right; i >= left; i--) result[result.length] = matrix[bottom][i];
    bottom--;

    for (let i = bottom; i >= top; i--) result[result.length] = matrix[i][left];
    left++;
  }

  return result;
};

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix));
