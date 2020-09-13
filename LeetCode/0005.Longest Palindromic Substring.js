/**
 * 最长回文子串（中心扩展法）
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  /* 左增右减循环判断
    let left = 0;
    let right = s.length - 1;

    let result = "";

    while (left < right) {
      if (s.charAt(left) != s.charAt(right)) {
        return valid(s, left, right - 1) || valid(s, left + 1, right) || valid(s, left + 1, right - 1);
      }

      left++;
      right--;
    }

    function valid() {} 
  */
  /* 超时
    if (s == "" || s.length < 2) return s;

    const result = [];

    const mid = s.length >> 1;

    if (s.length % 2 == 0) {
      let left = mid - 1;
      let right = mid;

      while (s.charAt(left) == s.charAt(right)) {
        result.push(s.charAt(left--));
        result.push(s.charAt(right++));
      }
    } else {
      let goLeft = mid;
      let goRight = mid;

      while (s.charAt(goLeft) == s.charAt(goRight)) {
        result.push(s.charAt(goLeft--));
        result.push(s.charAt(mid));
        result.push(s.charAt(goRight++));
      }
    }

    return result.join(""); 
  */

  if (s == '' || s.length < 2) return s;

  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const leftLen = center(s, i, i);
    const rightLen = center(s, i, i + 1);
    const maxLen = Math.max(leftLen, rightLen);

    if (maxLen > right - left) {
      left = i - (maxLen - 1) / 2;
      right = i + maxLen / 2;
    }
  }

  function center(str, left, right) {
    let L = left;
    let R = right;
    while (L >= 0 && R < str.length && str.charAt(L) == str.charAt(R)) {
      L--;
      R++;
    }

    return R - L - 1;
  }

  return s.substring(Math.ceil(left), right + 1);
};

var s = 'cbbd';
console.log(longestPalindrome(s));
