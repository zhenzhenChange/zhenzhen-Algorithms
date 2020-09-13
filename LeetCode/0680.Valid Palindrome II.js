/**
 * 验证回文字符串 Ⅱ
 *
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s.charAt(left) != s.charAt(right)) return valid(s, left + 1, right) || valid(s, left, right - 1);

    left++;
    right--;
  }

  function valid(s, left, right) {
    while (left < right) {
      if (s.charAt(left) != s.charAt(right)) return false;

      left++;
      right--;
    }

    return true;
  }

  return true;
};

var s = "abca";
console.log(validPalindrome(s));
