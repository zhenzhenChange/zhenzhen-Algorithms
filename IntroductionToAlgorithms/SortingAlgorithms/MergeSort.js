const data = require("../GenRandoms.js");

/**
 * 归并排序（分治）
 *
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(n)
 *
 * @param {*} sequence 序列
 * @param {*} rangeL   区间左端点 L
 *                                 => L -> R
 * @param {*} rangeR   区间右端点 R
 * @returns {void}
 */
function MergeSort(sequence, rangeL, rangeR) {
  if (rangeL < rangeR) {
    const rangeMid = Math.floor((rangeL + rangeR) / 2);

    MergeSort(sequence, rangeL, rangeMid);
    MergeSort(sequence, rangeMid + 1, rangeR);
    Merge(sequence, rangeL, rangeMid, rangeR);

    /**
     *
     * @param {*} sequence 序列
     * @param {*} rangeL   区间左端点 L      => L -> Mid
     * @param {*} rangeMid 区间中间值 Mid
     * @param {*} rangeR   区间右端点 R      => Mid -> R
     */
    function Merge(sequence, rangeL, rangeMid, rangeR) {
      const rangeLM = rangeMid - rangeL + 1;
      const rangeMR = rangeR - rangeMid;

      const L = new Array(rangeLM + 1);
      const R = new Array(rangeMR + 1);

      for (let i = 0; i < rangeLM; i++) L[i] = sequence[rangeL + i];
      for (let i = 0; i < rangeMR; i++) R[i] = sequence[rangeMid + i + 1];

      L[rangeLM] = R[rangeMR] = Number.MAX_SAFE_INTEGER;

      let [i, j, k] = [0, 0, 0];

      while (k < rangeR - rangeL + 1) {
        L[i] <= R[j] ? (sequence[rangeL + k] = L[i++]) : (sequence[rangeL + k] = R[j++]);

        k++;
      }
    }
  }
}

const sequence = data.GenRandoms();

MergeSort(sequence, 0, sequence.length - 1);

console.log(sequence);
