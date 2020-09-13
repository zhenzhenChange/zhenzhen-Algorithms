/**
 * 第一个错误的版本
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n 最高版本
   * @return {integer}  第一个错误的版本
   */
  return function (n) {
    let left = 0;
    let right = n;

    let mid = Math.ceil((left + right) / 2);
    while (left < right - 1) {
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
      mid = Math.ceil((left + right) / 2);
    }

    return mid;
  };
};
