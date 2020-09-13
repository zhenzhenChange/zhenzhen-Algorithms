/**
 * 字符串解码
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let result = "";
  let multiple = "";
  const stack = [];

  for (const char of s) {
    if (char == "[") {
      stack.push([Number(multiple), result]);
      result = "";
      multiple = "";
    } else if (char == "]") {
      const [popMultiple, popChar] = stack.pop();
      result = popChar + result.repeat(popMultiple);
    } else if (Number(char) >= 0) {
      multiple += char;
    } else {
      result += char;
    }
  }

  return result;
};

var s = "100[leetcode]";
console.log(decodeString(s));
