/**
 * 拥有最多糖果的孩子
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= max);
};

var candies = [4, 2, 1, 1, 2];
var extraCandies = 1;

console.log(kidsWithCandies(candies, extraCandies));
