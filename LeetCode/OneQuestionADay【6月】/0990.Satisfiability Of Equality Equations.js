/**
 * 并查集（按秩合并+路径压缩）
 *
 * 时间复杂度：O(n + C log C)
 * 时间复杂度：O(C)
 *
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const ranks = new Array(26).fill(0);
  const parents = new Array(26);

  // 初始化父级为自身
  for (let i = 0; i < 26; i++) parents[i] = i;

  for (const [charX, charL, charR, charY] of equations) {
    if (charL == "=") union(charX.charCodeAt() - 97, charY.charCodeAt() - 97);
  }

  for (const [charX, charL, charR, charY] of equations) {
    if (charL == "!" && find(charX.charCodeAt() - 97) == find(charY.charCodeAt() - 97)) return false;
  }

  return true;

  function find(node) {
    // 父级等于自身，自身就是根。否则递归且将自己的父级直接指向根（回溯）
    // 路径压缩（完全压缩）
    // return parents[node] == node ? node : (parents[node] = find(parents[node]));

    // 路径压缩（隔代压缩）
    while (node != parents[node]) {
      parents[node] = parents[parents[node]];
      node = parents[node];
    }

    return node;
  }

  function union(x, y) {
    const XRoot = find(x);
    const YRoot = find(y);

    if (XRoot == YRoot) return;

    const XRanks = ranks[XRoot];
    const YRanks = ranks[YRoot];

    // 按秩合并
    if (XRanks > YRanks) {
      parents[YRoot] = XRoot;
    } else {
      parents[XRoot] = YRoot;
      if (XRanks == YRanks) ranks[YRoot]++;
    }

    // 非按秩合并
    // parents[XRoot] = YRoot;
  }
};

var equations = ["c==c", "b==d", "x!=z"];
console.log(equationsPossible(equations));
