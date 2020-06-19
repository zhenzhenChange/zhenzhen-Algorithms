/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 2.双指针
  const str = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] != str[end]) return false;
    start++;
    end--;
  }

  return true;
};
