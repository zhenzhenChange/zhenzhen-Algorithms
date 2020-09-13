/**
 * 验证回文字符串
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str.charAt(start) != str.charAt(end)) return false;
    start++;
    end--;
  }

  return true;
};

var s = 'A man, a plan, a canal: Panama';
var s = 'race a car';
var result = isPalindrome(s);
console.log(result);
