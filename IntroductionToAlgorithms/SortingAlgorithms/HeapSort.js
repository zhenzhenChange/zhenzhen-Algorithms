const { GenRandoms } = require("../GenRandoms.js");

/**
 * 堆排序（原址）
 *
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(1)
 *
 * @param {*} sequence  序列
 * @returns {void}
 */
function HeapSort(sequence) {
  const left = (i) => i << 1;
  const right = (i) => (i << 1) + 1;
  const parent = (i) => i >> 1;

  BuildMaxHeap(sequence);

  for (let i = sequence.length - 1; i >= 1; i--) {
    [sequence[i], sequence[0]] = [sequence[0], sequence[i]];

    sequence.heapSize--;

    MaxHeapify(sequence, 0);
  }

  /**
   * 维护堆性质（最大堆）
   *
   * @param {*} sequence  序列
   * @param {*} i         序列下标
   * @returns {void}
   */
  function MaxHeapify(sequence, i) {
    let largest = i;

    const l = left(i);
    const r = right(i);

    if (l < sequence.heapSize && sequence[l] > sequence[largest]) largest = l;

    if (r < sequence.heapSize && sequence[r] > sequence[largest]) largest = r;

    if (largest != i) {
      [sequence[largest], sequence[i]] = [sequence[i], sequence[largest]];

      MaxHeapify(sequence, largest);
    }
  }

  /**
   * 建堆
   *
   * @param {*} sequence 序列
   * @returns {void}
   */
  function BuildMaxHeap(sequence) {
    sequence.heapSize = sequence.length;

    for (let i = parent(sequence.length); i >= 0; i--) MaxHeapify(sequence, i);
  }
}

const sequence = GenRandoms();

HeapSort(sequence);

console.log(sequence);
