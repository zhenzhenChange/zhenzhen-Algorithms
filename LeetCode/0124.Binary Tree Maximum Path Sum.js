/**
 * 二叉树中的最大路径和
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(h)
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;

  DFS(root);

  return max;

  function DFS(tree) {
    if (tree == null) return 0;

    const leftTree = Math.max(0, DFS(tree.left));
    const rightTree = Math.max(0, DFS(tree.right));

    max = Math.max(max, leftTree + tree.val + rightTree);

    return tree.val + Math.max(leftTree, rightTree);
  }
};

var root = [-10, 9, 20, null, null, 15, 7];
console.log(maxPathSum(root));
