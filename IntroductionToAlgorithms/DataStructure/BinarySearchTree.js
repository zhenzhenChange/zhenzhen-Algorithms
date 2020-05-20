/* 模拟二叉搜索树操作 */
class BinarySearchTree {
  static TreeWalk = [];

  /**
   *
   * @param {*} key 节点的关键字值
   *
   * @argument {*} left 左结点
   * @argument {*} right 右结点
   * @argument {*} parent 父结点
   */
  constructor(key) {
    this.key = key;
    this.root = null;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  /**
   * 中序遍历（递归版、可切换成先序、后序）
   *
   * 时间复杂度：O(n) -> n：树的结点数
   *
   * @param {BinarySearchTree} tree 二叉搜索树
   */
  static InorderTreeWalk(tree) {
    if (!tree) return;

    this.InorderTreeWalk(tree.left);

    this.TreeWalk.push(tree.key);

    this.InorderTreeWalk(tree.right);
  }

  /**
   * 查找操作（递归版）
   *
   * 时间复杂度：O(h) -> h：树的高度
   *
   * @param {BinarySearchTree} tree 二叉搜索树
   * @param {*} key  关键字值
   * @returns {BinarySearchTree}
   */
  static TreeSearch(tree, key) {
    if (!tree || key == tree.key) return tree;

    return key < tree.key ? this.TreeSearch(tree.left, key) : this.TreeSearch(tree.right, key);
  }

  /**
   * 查找操作（迭代版）
   *
   * 时间复杂度：O(h) -> h：树的高度
   *
   * @param {BinarySearchTree} tree 二叉搜索树
   * @param {*} key  关键字值
   * @returns {BinarySearchTree}
   */
  static TreeSearchIterative(tree, key) {
    while (tree && key != tree.key) key < tree.key ? (tree = tree.left) : (tree = tree.right);

    return tree;
  }

  /**
   * 查找最小关键字值
   *
   * 时间复杂度：O(h) -> h：树的高度
   *
   * @param {BinarySearchTree} tree 二叉搜索树
   * @returns {BinarySearchTree}
   */
  static TreeMinimum(tree) {
    while (tree.left) tree = tree.left;

    return tree;
  }

  /**
   * 查找最大关键字值
   *
   * 时间复杂度：O(h) -> h：树的高度
   *
   * @param {BinarySearchTree} tree 二叉搜索树
   * @returns {BinarySearchTree}
   */
  static TreeMaximum(tree) {
    while (tree.right) tree = tree.right;

    return tree;
  }

  /**
   * 查找后继
   *
   * 时间复杂度：O(h) -> h：树的高度
   *
   * @param {BinarySearchTree} tree 二叉搜索树
   * @returns {BinarySearchTree}
   */
  static TreeSuccessor(tree) {
    if (tree.right) return this.TreeSuccessor(tree.right);

    let parent = tree.parent;

    while (parent && tree == parent.right) {
      tree = parent;
      parent = parent.parent;
    }

    return parent;
  }

  /**
   * 插入操作
   *
   * 时间复杂度：O(h) -> h：树的高度
   *
   * @param {BinarySearchTree} tree 二叉搜索树
   * @param {BinarySearchTree} node 要插入的结点
   */
  static TreeInsert(tree, node) {
    let position = null;
    let root = tree.root;

    while (root) {
      position = root;

      node.key < root.key ? (root = root.left) : (root = root.right);
    }

    node.parent = position;

    if (!position) tree.root = node;

    node.key < position.key ? (position.left = node) : (position.right = node);
  }

  /**
   * 删除操作
   *
   * 时间复杂度：O(h) -> h：树的高度
   *
   * @param {BinarySearchTree} tree 二叉搜索树
   * @param {BinarySearchTree} node 要删除的结点
   */
  static TreeDelete(tree, node) {
    !node.left ? Transplant(tree, node, node.right) : Transplant(tree, node, node.left);

    let min = this.TreeMinimum(node.right);
    if (min.parent != node) {
      Transplant(tree, min, min.right);

      min.right = node.right;
      min.right.parent = min;
    }

    Transplant(tree, node, min);

    min.left = node.left;
    min.left.parent = min;

    /**
     * 移植要删除结点的子树
     *
     * @param {BinarySearchTree} tree    二叉搜索树
     * @param {BinarySearchTree} oldNode 旧结点
     * @param {BinarySearchTree} newNode 新结点
     */
    function Transplant(tree, oldNode, newNode) {
      if (!oldNode.parent) tree.root = newNode;

      oldNode == oldNode.parent.left ? (oldNode.parent.left = newNode) : (oldNode.parent.right = newNode);

      if (newNode) newNode.parent = oldNode.parent;
    }
  }
}

const t2 = new BinarySearchTree(2);
const t51 = new BinarySearchTree(5);
const t52 = new BinarySearchTree(5);
const t6 = new BinarySearchTree(6);
const t7 = new BinarySearchTree(7);
const t8 = new BinarySearchTree(8);

t6.left = t51;
t6.right = t7;
t6.root = t6;

t51.left = t2;
t51.right = t52;
t51.parent = t6;

t7.right = t8;
t7.parent = t6;

t8.parent = t7;

t2.parent = t51;
t52.parent = t51;

// console.log(t6);

// console.log(BinarySearchTree.TreeWalk);
// BinarySearchTree.InorderTreeWalk(t6);
// console.log(BinarySearchTree.TreeWalk);
// console.log(BinarySearchTree.TreeSearch(t6, 8));
// console.log(BinarySearchTree.TreeSearchIterative(t6, 8));
// console.log(BinarySearchTree.TreeMinimum(t6));
// console.log(BinarySearchTree.TreeMaximum(t6));
// console.log(BinarySearchTree.TreeSuccessor(t2));
const tt = new BinarySearchTree(6);
BinarySearchTree.TreeInsert(t6, tt);
console.log(t6);
BinarySearchTree.TreeDelete(t6, t7);
console.log(t6);
