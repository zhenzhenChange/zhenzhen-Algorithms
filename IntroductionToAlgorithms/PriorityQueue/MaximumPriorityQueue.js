// TODO: 待完善

/**
 * 最大优先队列
 *
 * @param {*} queue 队列
 * @returns {object}
 */
function MaximumPriorityQueue(queue) {
  const left = (i) => i << 1;
  const right = (i) => (i << 1) + 1;
  const parent = (i) => i >> 1;

  /**
   * 返回队列 queue 中具有最大键字的元素
   *
   * @param {*} queue 队列
   * @returns {*}     MaxElement
   */
  function Maximum(queue) {
    return queue[0];
  }

  /**
   * 去掉并返回队列 queue 中具有最大键字的元素
   *
   * @param {*} queue 队列
   * @returns {*}     MaxElement
   */
  function ExtractMax(queue) {
    if (queue.heapSize < 0) return;

    const maxElement = queue[0];
    queue[0] = queue[queue.heapSize--];

    MaxHeapify(queue, 0);

    return maxElement;
  }

  /**
   * 将元素 x (下标 i 对应的元素) 的关键字值增加到 k ，假设 k 的值不小于 x 的原关键字值
   *
   * @param {*} queue 队列
   * @param {*} i     下标
   * @param {*} key   关键字值
   */
  function IncreaseKey(queue, i, key) {
    if (key < queue[i]) new RangeError("key < queue[i]");

    queue[i] = key;

    while (i > 0 && queue[parent(i)] < queue[i]) {
      [queue[parent(i)], queue[i]] = [queue[i], queue[parent(i)]];
      i = parent(i);
    }
  }

  /**
   * 把元素 x 插入队列 queue 中
   *
   * @param {*} queue 队列
   * @param {*} key   元素 x 对应的关键字值
   */
  function Insert(queue, key) {
    queue.heapSize++;
    queue[queue.heapSize - 1] = Number.MIN_SAFE_INTEGER;

    IncreaseKey(queue, queue.heapSize, key);
  }

  function BuildMaxHeap(queue) {
    queue.heapSize = queue.length;

    for (let i = parent(queue.length); i >= 0; i--) MaxHeapify(queue, i);
  }

  function MaxHeapify(queue, i) {
    let largest = i;

    const l = left(i);
    const r = right(i);

    if (l < queue.heapSize && queue[l] > queue[largest]) largest = l;

    if (r < queue.heapSize && queue[r] > queue[largest]) largest = r;

    if (largest != i) {
      [queue[largest], queue[i]] = [queue[i], queue[largest]];

      MaxHeapify(queue, largest);
    }
  }

  BuildMaxHeap(queue);

  return { Insert, Maximum, ExtractMax, IncreaseKey };
}

const queue = [45, 36, 18, 53, 72, 30, 48, 93, 15, 35];

const result = MaximumPriorityQueue(queue);
console.log(result.ExtractMax(queue));
console.log(result.ExtractMax(queue));
console.log(queue);
