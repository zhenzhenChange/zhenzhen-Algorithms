/**
 * 柱状图中最大的矩形（两边扩展）
 *
 * 时间复杂度：O(n ^ 2)
 * 空间复杂度：O(1)
 *
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && heights[left] >= heights[i]) left--;

    while (right < heights.length && heights[right] >= heights[i]) right++;

    result = Math.max(result, (right - left - 1) * heights[i]);
  }

  return result;
};

var heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));
