/**
 * 转变数组后最接近目标值的数组和
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  arr.sort((a, b) => a - b);

  const length = arr.length;

  let sum = 0;
  for (let i = 0; i < length; i++) {
    const temp = (target - sum) / (length - i);
    if (temp < arr[i]) return Math.round(temp - 0.1);
    sum += arr[i];
  }

  return arr[length - 1];
};

var arr = [2, 3, 5];
var target = 10;
console.log(findBestValue(arr, target));
