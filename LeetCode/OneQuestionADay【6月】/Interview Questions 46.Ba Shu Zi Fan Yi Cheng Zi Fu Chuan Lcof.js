/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  // let base = 97;
  // const charTable = new Array(26);
  // for (let i = 0; i < 26; i++) charTable[i] = String.fromCharCode(base++);
  if (num < 10) return 1;

  return num % 100 < 10 || num % 100 > 25
    ? translateNum(parseInt(num / 10))
    : translateNum(parseInt(num / 10)) + translateNum(parseInt(num / 100));
};

var num = 12258;
console.log(translateNum(num));
