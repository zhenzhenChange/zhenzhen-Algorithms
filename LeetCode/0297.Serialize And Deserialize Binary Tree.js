/**
 * 二叉树的序列化与反序列化
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

/**
 * 将树编码为单个字符串（前序遍历）
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return 'null,';

  const left = serialize(root.left);
  const right = serialize(root.right);

  return `${root.val},${left}${right}`;
};

/**
 * 将您的编码数据解码为树
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return deTree(data.split(','));

  function deTree(data) {
    const root = data.shift();

    if (root == 'null') return null;

    const rootTree = new TreeNode(+root);

    rootTree.left = deTree(data);
    rootTree.right = deTree(data);

    return rootTree;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);
const t4 = new TreeNode(4);
const t5 = new TreeNode(5);

t1.left = t2;
t1.right = t3;

t3.left = t4;
t3.right = t5;

const en = serialize(t1);
const de = deserialize(en);

console.log(en);
console.log(de);
console.log(t1);
