const data = require("../GenRandoms.js");

/**
 * 插入排序（原址）
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 *
 * @param {*} sequence 序列
 * @returns {void}
 */
function InsertionSort(sequence) {
  for (let i = 1; i < sequence.length; i++) {
    let j = i - 1;
    const current = sequence[i];

    while (j >= 0 && sequence[j] > current) sequence[j + 1] = sequence[j--];

    sequence[j + 1] = current;
  }
}

const sequence = data.GenRandoms();

InsertionSort(sequence);

console.log(sequence);
