/**
 * 移除重复节点
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  if (!head) return head;

  const set = new Set();

  let prev = head;
  let node = head.next;

  set.add(head.val);

  while (node) {
    if (set.has(node.val)) {
      prev.next = node.next;
    } else {
      set.add(node.val);
      prev = prev.next;
    }

    node = node.next;
  }

  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);
const l4 = new ListNode(3);
const l5 = new ListNode(2);
const l6 = new ListNode(1);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;

console.log(l1);
console.log(removeDuplicateNodes(l1));
