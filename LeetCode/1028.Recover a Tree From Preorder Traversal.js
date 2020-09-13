/**
 * 从先序遍历还原二叉树
 *
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  let index = 0; // 遍历字符串的指针

  const buildTree = (S, level) => {
    // 构建一个子树，它属于第level层
    let curLevel = 0; // 当前遇到的节点的level
    while (index < S.length && S[index] == '-') {
      curLevel++; // 计算level
      index++; // 指针+1
    }
    if (curLevel < level) {
      //想要构建第level层的一个子树，但遇到的当前根节点的level
      // 却不等于level(比level小)，说明该子树已经构建完毕，要出递归栈
      index -= curLevel; // 刚刚的while循环，index 前进了 curLevel 长度，要退回来
      return null; // 递归的出口，向上返回null
    }
    let start = index; // 记录节点值开头的位置
    while (index < S.length && S[index] != '-') {
      index++; // 指针随着节点值推进
    }
    let val = S.slice(start, index); // 截取出节点值
    let curNode = new TreeNode(val); // 创建当前节点
    curNode.left = buildTree(S, level + 1); // 构建当前节点的左子树
    curNode.right = buildTree(S, level + 1); // 构建当前节点的右子树
    return curNode; // 返回子树
  };

  return buildTree(S, 0); // 构建第0层的子树（整个树）
};

var S = '1-2--3--4-5--6--7';
console.log(recoverFromPreorder(S));
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
