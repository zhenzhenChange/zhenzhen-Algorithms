/* 模拟红黑树操作 */
class RedBlackTree {
  /* 哨兵 */
  static Nil = { color: "Black", key: null, left: null, right: null, parent: null };

  /**
   *
   * @param {*} key   关键字值
   * @param {*} color 颜色 ( Red or Black )
   *
   * @property left   左结点
   * @property right  右结点
   * @property parent 父结点
   */
  constructor(key, color) {
    this.key = key;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  /* 通过旋转修改指针结构，保持二叉搜索树的性质的局部操作，对旋转后的树进行中序遍历产生的结果与旋转前相同 */

  /**
   * 左旋
   *
   * 时间复杂度：O(1)
   *
   * @param {*} tree 二叉搜索树
   * @param {*} node 要转换的结点
   */
  static LeftRotate(tree, node) {
    const nodeSubTree = node.right;
    node.right = nodeSubTree.left; // => 将 nodeSubTree 左子树转换为 node 右子树

    if (nodeSubTree.left != this.Nil) nodeSubTree.left.parent = node;

    nodeSubTree.parent = node.parent; // => 将 node 的父结点链接到 nodeSubTree

    if (node.parent == this.Nil) tree.root = nodeSubTree;
    else if (node == node.parent.left) node.parent.left = nodeSubTree;
    else node.parent.right = nodeSubTree;

    nodeSubTree.left = node; // => 把 node 放在 nodeSubTree 左边
    node.parent = nodeSubTree;
  }

  /**
   * 右旋
   *
   * 时间复杂度：O(1)
   *
   * @param {*} tree 二叉搜索树
   * @param {*} node 要转换的结点
   */
  static RightRotate(tree, node) {
    const nodeSubTree = node.left;
    node.left = nodeSubTree.right;

    if (nodeSubTree.right != this.Nil) nodeSubTree.right.parent = node;

    nodeSubTree.parent = node.parent;

    if (node.parent == this.Nil) tree.root = nodeSubTree;
    else if (node == node.parent.right) node.parent.right = nodeSubTree;
    else node.parent.left = nodeSubTree;

    nodeSubTree.right = node;
    node.parent = nodeSubTree;
  }

  /**
   * 插入操作
   *
   * 时间复杂度：O(lg n)
   *
   * @param {*} tree 红黑树
   * @param {*} node 要插入的结点
   */
  static RBInsert(tree, node) {
    let nil = this.Nil;
    let root = tree.root;

    while (root != this.Nil) {
      nil = root;

      node.key < root.key ? (root = root.left) : (root = root.right);
    }

    node.parent = nil;

    if (nil == this.Nil) tree.root = node;
    else if (node.key < nil.key) nil.left = node;
    else nil.right = node;

    node.left = node.right = this.Nil;
    node.color = "Red";

    this.RBInsertFixup(tree, node);
  }

  /**
   * 维持红黑树的性质
   * 
   * 时间复杂度：O(lg n)
   *
   * @param {*} tree 红黑树
   * @param {*} node 要修补的结点
   */
  static RBInsertFixup(tree, node) {
    while (node.parent.color == "Red") {
      if (node.parent == node.parent.parent.left) {
        // => case 1
        if (node.parent.parent.right.color == "Red") {
          node.parent.color = "Black";
          node.parent.parent.right.color = "Black";
          node.parent.parent.color = "Red";
          node = node.parent.parent;
        } else {
          // => case 2
          if (node == node.parent.right) {
            node = node.parent;
            this.LeftRotate(tree, node);
          }

          // => case 3
          node.parent.color = "Black";
          node.parent.parent.color = "Red";
          this.RightRotate(tree, node.parent.parent);
        }
      } else {
        if (node.parent.parent.left.color == "Red") {
          node = node.parent;
          this.RightRotate(tree, node);
        }

        node.parent.color = "Black";
        node.parent.parent.color = "Red";
        this.LeftRotate(tree, node.parent.parent);
      }

      tree.root.color = "Black";
    }
  }
}

function GenRedBlackTree() {
  const t26 = new RedBlackTree(26, "Black");
  const t41 = new RedBlackTree(41, "Black");
  const t47 = new RedBlackTree(47, "Black");
  const t38 = new RedBlackTree(38, "Black");
  const t28 = new RedBlackTree(28, "Black");
  const t23 = new RedBlackTree(23, "Black");
  const t21 = new RedBlackTree(21, "Black");
  const t19 = new RedBlackTree(19, "Black");
  const t16 = new RedBlackTree(16, "Black");
  const t14 = new RedBlackTree(14, "Black");
  const t12 = new RedBlackTree(12, "Black");
  const t07 = new RedBlackTree(7, "Black");

  const t17 = new RedBlackTree(17, "Red");
  const t30 = new RedBlackTree(30, "Red");
  const t35 = new RedBlackTree(35, "Red");
  const t39 = new RedBlackTree(39, "Red");
  const t20 = new RedBlackTree(20, "Red");
  const t15 = new RedBlackTree(15, "Red");
  const t10 = new RedBlackTree(10, "Red");
  const t03 = new RedBlackTree(3, "Red");

  t26.left = t17;
  t26.right = t41;
  t26.parent = RedBlackTree.Nil;

  t17.left = t14;
  t17.right = t21;
  t17.parent = t26;

  t14.left = t10;
  t14.right = t16;
  t14.parent = t17;

  t10.left = t07;
  t10.right = t12;
  t10.parent = t14;

  t07.left = t03;
  t07.right = RedBlackTree.Nil;
  t07.parent = t10;

  t03.left = t03.right = RedBlackTree.Nil;
  t03.parent = t07;

  t12.left = t12.right = RedBlackTree.Nil;
  t12.parent = t10;

  t16.left = t15;
  t16.right = RedBlackTree.Nil;
  t16.parent = t14;

  t15.left = t15.right = RedBlackTree.Nil;
  t15.parent = t16;

  t21.left = t19;
  t21.right = t23;
  t21.parent = t17;

  t19.left = RedBlackTree.Nil;
  t19.right = t20;
  t19.parent = t21;

  t20.left = t20.right = RedBlackTree.Nil;
  t20.parent = t19;

  t23.left = t23.right = RedBlackTree.Nil;
  t23.parent = t21;

  t41.left = t30;
  t41.right = t47;
  t41.parent = t26;

  t30.left = t28;
  t30.right = t38;
  t30.parent = t41;

  t28.left = t28.right = RedBlackTree.Nil;
  t28.parent = t30;

  t38.left = t35;
  t38.right = t39;
  t38.parent = t30;

  t35.left = t35.right = RedBlackTree.Nil;
  t35.parent = t38;

  t39.left = t39.right = RedBlackTree.Nil;
  t39.parent = t38;

  t47.left = t47.right = RedBlackTree.Nil;
  t47.parent = t41;

  t26.root = t26;

  return t26;
}

const redBlackTree = GenRedBlackTree();
console.log(redBlackTree);
