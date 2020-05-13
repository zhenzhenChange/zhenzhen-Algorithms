const { GenRandoms } = require("../GenRandoms.js");

/**
 * 计数排序
 *
 * 时间复杂度：O(n + integer)
 * 空间复杂度：O(integer)
 *
 * @param {*} sequence  序列
 * @param {*} integer   序列内元素最大值
 * @returns {number[]}
 */
function CountingSort(sequence, integer) {
  const result = [];

  const ary = new Array(integer + 1).fill(0);

  for (let i = 0; i < sequence.length; i++) ary[sequence[i]]++;

  for (let i = 1; i < integer + 1; i++) ary[i] += ary[i - 1];

  for (let i = sequence.length - 1; i >= 0; i--) result[--ary[sequence[i]]] = sequence[i];

  return result;
}

const integer = 8000000;
const sequence = GenRandoms();

console.log(CountingSort(sequence, integer));
