/**
 * 随机排列数组（不等概率、原址）
 *
 * @param {*} sequence
 * @returns {void}
 */
function RandomizedSortArray(sequence) {
  const length = sequence.length;

  const idxSet = [...RandomIndex(0, length)];

  for (let i = 0; i < length - 1; i++) {
    [sequence[idxSet[i]], sequence[i]] = [sequence[i], sequence[idxSet[i]]];
  }
}

/**
 * 随机生成数组长度范围内索引（生成数量与长度对应）
 *
 * @param {*} rangL
 * @param {*} rangR
 * @returns {object}
 */
function RandomIndex(rangL, rangR) {
  const randomSet = new Set();

  while (randomSet.size < rangR) {
    randomSet.add(Math.floor(Math.random() * (rangR - rangL) + rangL));
  }

  return randomSet;
}

const sequence = [1, 2, 3, 4, 5, 6];

RandomArray(sequence);

console.log(sequence);
