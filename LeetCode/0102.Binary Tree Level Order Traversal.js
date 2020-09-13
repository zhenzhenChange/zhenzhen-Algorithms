/**
 * 二叉树的层序遍历（宽度优先搜索）
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  if (!root) return result;

  const queue = [];
  queue.push(root);

  while (queue.length != 0) {
    const currentLevelSize = queue.length;

    result.push([]);

    for (let i = 0; i < currentLevelSize; i++) {
      const node = queue.shift();

      result[result.length - 1].push(node.val);

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }
  }

  return result;
};
