/**
 * 单词拆分
 * 
 * 时间复杂度：O(n ^ 2)
 * 空间复杂度：O(n)
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);

  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

var s = "leetcode";
var wordDict = ["leet", "code"];

console.log(wordBreak(s, wordDict));
