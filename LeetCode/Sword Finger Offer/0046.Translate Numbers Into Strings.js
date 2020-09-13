/**
 * 把数字翻译成字符串
 *
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  if (num < 10) return 1;

  return num % 100 < 10 || num % 100 > 25
    ? translateNum(parseInt(num / 10))
    : translateNum(parseInt(num / 10)) + translateNum(parseInt(num / 100));
};

var num = 12258;
console.log(translateNum(num));
