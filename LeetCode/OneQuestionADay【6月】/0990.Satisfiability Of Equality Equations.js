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
    if (charL == "=") unionFind(charX.charCodeAt() - 97, charY.charCodeAt() - 97);
  }

  for (const [charX, charL, charR, charY] of equations) {
    if (charL == "!" && findRoot(charX.charCodeAt() - 97) == findRoot(charY.charCodeAt() - 97)) return false;
  }

  return true;

  function findRoot(node) {
    let nodeRoot = node;

    while (parents[nodeRoot] != -1) nodeRoot = parents[nodeRoot];

    return nodeRoot;
  }

  function unionFind(x, y) {
    const xRoot = findRoot(x);
    const yRoot = findRoot(y);

    if (xRoot == yRoot) return;

    if (ranks[xRoot] > ranks[yRoot]) {
      parents[yRoot] = xRoot;
    } else if (ranks[xRoot] < ranks[yRoot]) {
      parents[xRoot] = yRoot;
    } else {
      parents[yRoot] = xRoot;
      ranks[xRoot]++;
    }
  }
};

var equations = ["c==c", "b==d", "x!=z"];
console.log(equationsPossible(equations));
