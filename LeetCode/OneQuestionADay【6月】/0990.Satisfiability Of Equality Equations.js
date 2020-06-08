/**
 * 并查集
 *
 * 时间复杂度：O(n + C log C)
 * 时间复杂度：O(C)
 *
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const ranks = new Array(26).fill(0);
  const parents = new Array(26).fill(-1);

  for (const [charX, charL, charR, charY] of equations) {
    if (charL == "=") union(charX.charCodeAt() - 97, charY.charCodeAt() - 97);
  }

  for (const [charX, charL, charR, charY] of equations) {
    if (charL == "!" && find(charX.charCodeAt() - 97) == find(charY.charCodeAt() - 97)) return false;
  }

  return true;

  function find(node) {
    let nodeRoot = node;

    while (parents[nodeRoot] != -1) nodeRoot = parents[nodeRoot];

    return nodeRoot;
  }

  function union(x, y) {
    const XRoot = find(x);
    const YRoot = find(y);

    if (XRoot == YRoot) return;

    const XRanks = ranks[XRoot];
    const YRanks = ranks[YRoot];

    if (XRanks > YRanks) {
      parents[YRoot] = XRoot;
    } else {
      parents[XRoot] = YRoot;
      if (XRanks == YRanks) ranks[YRoot]++;
    }
  }
};

var equations = ["c==c", "b==d", "x!=z"];
console.log(equationsPossible(equations));
