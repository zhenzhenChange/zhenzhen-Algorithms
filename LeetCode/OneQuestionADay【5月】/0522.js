/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 0105.从前序与中序遍历序列构造二叉树
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const map = new Map();
  const length = inorder.length;
  for (let i = 0; i < length; i++) map.set(inorder[i], i);

  function recursionBuild(prev, midd, prevL, prevR, middL, middR) {
    if (prevL > prevR) return null;

    const prevRoot = prevL;

    const middRoot = map.get(prev[prevRoot]);

    const root = new TreeNode(prev[prevRoot]);

    const leftSubTreeSize = middRoot - middL;

    root.left = recursionBuild(prev, midd, prevL + 1, prevL + leftSubTreeSize, middL, middRoot - 1);
    root.right = recursionBuild(prev, midd, prevL + leftSubTreeSize + 1, prevR, middRoot + 1, middR);

    return root;
  }

  return recursionBuild(preorder, inorder, 0, length - 1, 0, length - 1);
};

var preorder = [3, 9, 20, 15, 7];
var inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
