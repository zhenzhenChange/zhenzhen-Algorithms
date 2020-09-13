/**
 * 每日温度
 *
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  /**
   * 暴力
   *
   * 时间复杂度：O(n ^ 2)
   * 空间复杂度：O(n)
   */
  // const result = new Array(T.length).fill(0);

  // for (let i = 0; i < T.length; i++) {
  //   for (let j = i + 1; j < T.length; j++) {
  //     if (T[j] > T[i]) {
  //       result[i] = j - i;
  //       break;
  //     }
  //   }
  // }

  // return result;

  /**
   * 单调栈
   *
   * 时间复杂度：O(n)
   * 空间复杂度：O(n)
   */
  const stack = [];
  const result = new Array(T.length).fill(0);

  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length != 0 && T[i] >= T[stack[stack.length - 1]]) stack.pop();

    if (stack.length != 0 && T[i] < T[stack[stack.length - 1]])
      result[i] = stack[stack.length - 1] - i;

    stack.push(i);
  }

  return result;
};

var T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(T));
