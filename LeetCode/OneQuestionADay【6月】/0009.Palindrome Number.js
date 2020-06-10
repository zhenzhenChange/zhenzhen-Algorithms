/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x) => [...String(x)].reverse().join("") == String(x);

var x = 0;
console.log(isPalindrome(x));
