/**
 * 最大子数组问题
 *
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(n)
 *
 * @param {*} sequence  序列
 * @param {*} rangeL    区间左端点 L
 * @param {*} rangeR    区间右端点 R
 * @returns {object}    最大子数组区间范围 L -> R ，最大子数组和 maxSum
 */
function FindMaximumSubArray(sequence, rangeL, rangeR) {
  if (rangeL == rangeR) return { rangeL, rangeR, maxSum: sequence[0] };

  const rangeMid = (rangeL + rangeR) >> 1; // Math.floor((rangeL + rangeR) / 2);

  const resultLM = FindMaximumSubArray(sequence, rangeL, rangeMid);
  const resultMR = FindMaximumSubArray(sequence, rangeMid + 1, rangeR);
  const resultCrossMid = FindMaxCrossingSubArray(sequence, rangeL, rangeMid, rangeR);

  const [LMMaxSum, MRMaxSum, MidMaxSum] = [resultLM.maxSum, resultMR.maxSum, resultCrossMid.maxSum];

  if (LMMaxSum >= MRMaxSum && LMMaxSum >= MidMaxSum) {
    return resultLM;
  } else if (MRMaxSum >= LMMaxSum && MRMaxSum >= MidMaxSum) {
    return resultMR;
  } else {
    return resultCrossMid;
  }

  /**
   *
   * @param {*} sequence  序列
   * @param {*} rangeL    区间左端点 L    L -> Mid
   * @param {*} rangeMid  区间中间值 Mid
   * @param {*} rangeR    区间右端点 R    Mid -> R
   * @returns {object}    跨中间值最大子数组区间范围 L -> Mid <- R ，跨中间值子数组最大和 midMaxSum
   */
  function FindMaxCrossingSubArray(sequence, rangeL, rangeMid, rangeR) {
    let sum = 0;
    let LMaxSum = 0;
    let LMaxIndex = 0;

    for (let i = rangeMid; i >= rangeL; i--) {
      sum += sequence[i];

      if (sum > LMaxSum) {
        LMaxSum = sum;
        LMaxIndex = i;
      }
    }

    sum = 0;
    let RMaxSum = 0;
    let RMaxIndex = 0;
    for (let i = rangeMid + 1; i < rangeR; i++) {
      sum += sequence[i];

      if (sum > RMaxSum) {
        RMaxSum = sum;
        RMaxIndex = i;
      }
    }

    return { LMaxIndex, RMaxIndex, midMaxSum: LMaxSum + RMaxSum };
  }
}

const sequence = [];
const Sequence = [100, 113, 110, 85, 105, 102, 86, 63, 81, 101, 94, 106, 101, 79, 94, 90, 97];
for (let i = 0; i < Sequence.length - 1; i++) sequence[i] = Sequence[i + 1] - Sequence[i];

console.log(sequence); // [ 13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7 ]

const result = FindMaximumSubArray(sequence, 0, sequence.length - 1);
console.log(result);
