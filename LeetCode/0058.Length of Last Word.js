/**
 * 最后一个单词的长度
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(' ').pop().length;
};

var s = 'a ';
console.log(lengthOfLastWord(s));
