/**
 * 二叉树的最近公共祖先
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root == p || root == q) return root;

  const leftTree = lowestCommonAncestor(root.left, p, q);
  const rightTree = lowestCommonAncestor(root.right, p, q);

  return !leftTree ? rightTree : !rightTree ? leftTree : root;
};
