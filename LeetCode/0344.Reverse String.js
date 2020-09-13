/**
 * 反转字符串
 *
 * @param {character[]} s
 * @return {void}
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[right], s[left]] = [s[left], s[right]];

    left++;
    right--;
  }
};

var s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);
