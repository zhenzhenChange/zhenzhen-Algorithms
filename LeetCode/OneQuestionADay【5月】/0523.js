/**
 * 0076.最小覆盖子串
 *
 * 时间复杂度：O(s + t)
 * 空间复杂度：O(t)
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let resultLength;
  let minLength = Infinity;
  const TMap = new Map();

  for (const char of t) !TMap.has(char) ? TMap.set(char, 1) : TMap.set(char, TMap.get(char) + 1);

  let L = 0;
  let R = 0;
  let charType = TMap.size;

  while (R < s.length) {
    const RChar = s.charAt(R);

    if (TMap.has(RChar)) TMap.set(RChar, TMap.get(RChar) - 1);
    if (TMap.get(RChar) == 0) charType--;

    while (charType == 0) {
      if (R - L + 1 < minLength) {
        minLength = R - L + 1;
        resultLength = L;
      }

      const LChar = s.charAt(L);

      if (TMap.has(LChar)) TMap.set(LChar, TMap.get(LChar) + 1);
      if (TMap.get(LChar) > 0) charType++;

      L++;
    }

    R++;
  }

  return s.substring(resultLength, resultLength + minLength);
};

var s = "a";
var t = "b";
console.log(minWindow(s, t));
