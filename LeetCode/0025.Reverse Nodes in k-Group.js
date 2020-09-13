/**
 * K 个一组翻转链表
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const guard = new ListNode(0);
  guard.next = head;
  let prev = guard;

  function reverse(head, tail) {
    let prev = tail.next;
    let memoHead = head;

    while (prev != tail) {
      const next = memoHead.next;
      memoHead.next = prev;
      prev = memoHead;
      memoHead = next;
    }

    return [tail, head];
  }

  while (head) {
    let tail = prev;

    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) return guard.next;
    }

    const next = tail.next;
    [head, tail] = reverse(head, tail);
    prev.next = head;
    tail.next = next;

    prev = tail;
    head = tail.next;
  }

  return guard.next;
};
