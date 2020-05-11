const { GenRandoms } = require("../GenRandoms.js");

/**
 * 快速排序（原址、分治）
 *
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(1)
 *
 * @param {*} sequence  序列
 * @param {*} rangL     区间左端点
 * @param {*} rangR     区间右端点
 * @returns {void}
 */
function QuickSort(sequence, rangL, rangR) {
  if (rangL >= rangR) return;

  const rangMid = Partition(sequence, rangL, rangR);

  QuickSort(sequence, rangL, rangMid - 1);
  QuickSort(sequence, rangMid + 1, rangR);
}

/**
 * 分区
 *
 * @param {*} sequence 序列
 * @param {*} rangL    区间左端点
 * @param {*} rangR    区间右端点
 * @returns {number}   主元 pivotElement 新下标
 */
function Partition(sequence, rangL, rangR) {
  const pivotElement = sequence[rangR];
  let i = rangL - 1;

  for (let j = rangL; j < rangR; j++) {
    if (sequence[j] <= pivotElement) {
      i++;
      [sequence[j], sequence[i]] = [sequence[i], sequence[j]];
    }
  }

  i++;

  [sequence[rangR], sequence[i]] = [sequence[i], sequence[rangR]];

  return i;
}

const sequence = GenRandoms();
// const sequence = [2, 5, 6, 1, 8, 3, 7, 4];

QuickSort(sequence, 0, sequence.length - 1);

console.log(sequence);
