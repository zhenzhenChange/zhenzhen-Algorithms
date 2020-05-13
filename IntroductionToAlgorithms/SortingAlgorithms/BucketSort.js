/**
 * 桶排序（使用插入排序作为子过程）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {*} sequence 序列
 */
function BucketSort(sequence) {
  const length = sequence.length;

  const buckets = new Array(length);

  for (let i = 0; i < length; i++) buckets[i] = [];

  for (let i = 0; i < length; i++) buckets[Math.floor(length * sequence[i])].push(sequence[i]);

  for (let i = 0; i < length; i++) {
    const bucket = buckets[i];
    const bucketLength = bucket.length;

    if (bucketLength <= 1) continue;

    for (let j = 1; j < bucketLength; j++) {
      let k = j - 1;
      const current = bucket[j];

      while (k >= 0 && bucket[k] > current) bucket[k + 1] = bucket[k--];

      bucket[k + 1] = current;
    }
  }

  let k = 0;
  for (let i = 0; i < length; i++) {
    const bucket = buckets[i];

    for (let j = 0; j < bucket.length; j++) sequence[k++] = bucket[j];
  }
}

/**
 * 生成 10 个 0 - 1 的随机数
 */
function GenRandoms() {
  const ary = [];

  for (let i = 0; i < 10; i++) ary[i] = +Math.random().toFixed(2);

  return ary;
}

const sequence = GenRandoms();

console.log(sequence);
console.log(sequence.sort((a, b) => a - b));
BucketSort(sequence);
console.log(sequence);
