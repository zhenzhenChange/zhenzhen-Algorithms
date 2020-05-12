/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let length = this.original.length;

  const copy = this.original.slice();

  while (length) {
    const randomIndex = parseInt(Math.random() * length);

    length--;

    [copy[length], copy[randomIndex]] = [copy[randomIndex], copy[length]];
  }

  return copy;
};

var nums = [1, 2, 3];

var solution = new Solution(nums);

console.log(solution.shuffle());
console.log(solution.reset());
console.log(solution.shuffle());
