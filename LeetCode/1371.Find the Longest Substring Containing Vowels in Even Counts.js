/**
 * 每个元音包含偶数次的最长子字符串
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(S)
 *
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const ary = new Array(1 << 5).fill(-1);
  ary[0] = 0;

  let status = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case "a":
        status ^= 1 << 0;
        break;
      case "e":
        status ^= 1 << 1;
        break;
      case "i":
        status ^= 1 << 2;
        break;
      case "o":
        status ^= 1 << 3;
        break;
      case "u":
        status ^= 1 << 4;
        break;
    }

    ~ary[status] ? (result = Math.max(result, i + 1 - ary[status])) : (ary[status] = i + 1);
  }

  return result;
};

var s = "bcbcbc";
console.log(findTheLongestSubstring(s));
