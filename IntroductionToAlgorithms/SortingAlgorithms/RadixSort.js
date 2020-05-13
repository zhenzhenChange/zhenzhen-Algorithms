const { GenRandoms } = require("../GenRandoms.js");

/**
 * 基数排序（使用计数排序作为子过程、低位优先）
 *
 * 时间复杂度：O(digit(n + k))
 * 空间复杂度：O(n + k)
 *
 * @param {*} sequence 序列
 * @param {*} digit    序列元素的最长数位长度
 * @returns {number[]}
 */
function RadixSort(sequence, digit) {
  const result = [];

  for (let i = 0; i < sequence.length; i++) sequence[i] = String(sequence[i]).padStart(digit, "0");

  for (let i = digit - 1; i >= 0; i--) {
    // TODO: 优化 k ，当前采用最大值 9 [0,9) ，可优化成当前数位的最大值（因为不会每个数位都会达到 9 ）
    const ary = new Array(10).fill(0);

    for (let j = 0; j < sequence.length; j++) ary[sequence[j].charAt(i)]++;

    for (let j = 1; j < 10; j++) ary[j] += ary[j - 1];

    for (let j = sequence.length - 1; j >= 0; j--) result[--ary[sequence[j].charAt(i)]] = sequence[j];

    for (let j = 0; j < sequence.length; j++) sequence[j] = result[j];
  }

  return sequence.map((v) => +v);
}

const sequence = GenRandoms();

console.log(RadixSort(sequence, 7));
