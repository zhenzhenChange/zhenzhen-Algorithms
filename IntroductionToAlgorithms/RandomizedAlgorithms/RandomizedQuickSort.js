const { GenRandoms } = require("../GenRandoms.js");

function RandomizedQuickSort(sequence, rangL, rangR) {
  if (rangL >= rangR) return;

  const rangMid = RandomizedPartition(sequence, rangL, rangR);

  RandomizedQuickSort(sequence, rangL, rangMid - 1);
  RandomizedQuickSort(sequence, rangMid + 1, rangR);
}

function RandomizedPartition(sequence, rangL, rangR) {
  const i = Random(rangL, rangR);
  [sequence[i], sequence[rangR]] = [sequence[rangR], sequence[i]];
  return Partition(sequence, rangL, rangR);
}

function Partition(sequence, rangL, rangR) {
  const pivotElement = sequence[rangR];
  let i = rangL - 1;

  for (let j = rangL; j < rangR; j++) {
    if (sequence[j] <= pivotElement) {
      i++;
      [sequence[j], sequence[i]] = [sequence[i], sequence[j]];
    }
  }

  i++;

  [sequence[rangR], sequence[i]] = [sequence[i], sequence[rangR]];

  return i;
}

function Random(rangL, rangR) {
  return parseInt(Math.random() * (rangR - rangL + 1) + rangL, 10);
}

const sequence = GenRandoms();

RandomizedQuickSort(sequence, 0, sequence.length - 1);

console.log(sequence);
