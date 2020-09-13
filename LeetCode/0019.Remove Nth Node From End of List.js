/**
 * 删除链表的倒数第 N 个节点
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 记录结点个数
  let length = 0;
  let point = head;

  while (point) {
    length++;
    point = point.next;
  }

  // 正向删除，要删除的结点的前一个位置
  let delPosition = length - n;

  // 提供一个哑结点处理边界
  const fake = new ListNode(-1);
  fake.next = head;

  point = fake;

  // 到达指定位置
  while (delPosition != 0) {
    delPosition--;
    point = point.next;
  }

  // 执行 "删除" 操作
  point.next = point.next.next;

  return fake.next;
};
