/**
 * 方阵乘法（n x n）
 *
 * 时间复杂度：O(n^3)
 * 空间复杂度：O(n^2)
 *
 * @param {*} matrixA 矩阵 A
 * @param {*} matrixB 矩阵 B
 * @returns {*} matrixC = matrixA * matrixB
 */
function SquareMatrixMultiply(matrixA, matrixB) {
  const rows = matrixA.length;
  const matrixC = new Array(rows);

  for (let i = 0; i < matrixC.length; i++) {
    matrixC[i] = new Array(rows);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      matrixC[i][j] = 0;
      for (let k = 0; k < rows; k++) {
        matrixC[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return matrixC;
}

const matrixA = [
  [2, 1],
  [4, 3],
];

const matrixB = [
  [1, 2],
  [1, 0],
];

const matrixC = SquareMatrixMultiply(matrixA, matrixB);

console.log(matrixC);
