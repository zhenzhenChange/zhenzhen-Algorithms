/**
 * 合并二叉树（深度优先遍历）
 *
 * 时间复杂度：O(min(m,n))
 * 空间复杂度：O(min(m,n))
 *
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;

  t1.val += t2.val; // 根
  t1.left = mergeTrees(t1.left, t2.left); // 左
  t1.right = mergeTrees(t1.right, t2.right); // 右

  return t1;
};
