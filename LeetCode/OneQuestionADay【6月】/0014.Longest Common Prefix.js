/**
 * 时间复杂度：O(mn)
 * 空间复杂度：O(1)
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // if (!strs.length) return "";

  // const [start, ...args] = strs;
  // let str = "";

  // for (let i = 0; i < start.length; i++) {
  //   const flag = args.every(v => v[i] == start[i]);
  //   if (flag) str += start[i];
  //   else break;
  // }

  // return str;

  // 纵向扫描
  const length = strs.length;
  const firstCharLength = strs[0].length;

  for (let i = 0; i < firstCharLength; i++) {
    const currChar = strs[0].charAt(i);
    for (let j = 1; j < length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) != currChar) return strs[0].substring(0, i);
    }
  }

  return strs[0];
};

var strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
