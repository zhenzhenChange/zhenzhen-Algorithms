/**
 * 洗牌算法（原址）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {*} sequence 序列
 */
function Shuffle(sequence) {
  let length = sequence.length;

  while (length) {
    const randomIndex = parseInt(Math.random() * length);

    length--;

    [sequence[length], sequence[randomIndex]] = [sequence[randomIndex], sequence[length]];
  }
}

const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Shuffle(sequence);

console.log(sequence);
