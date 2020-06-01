/**
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let point = head;

  while (point != null) {
    let next = point.next;

    point.next = prev;
    prev = point;
    point = next;
  }

  return prev;
};
