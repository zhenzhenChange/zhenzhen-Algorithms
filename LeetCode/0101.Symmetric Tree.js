/**
 * 对称二叉树
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function check(L, R) {
    if (!L && !R) return true;
    if (!L || !R) return false;

    return L.val == R.val && check(L.left, R.right) && check(L.right, R.left);
  }

  return check(root, root);
};
