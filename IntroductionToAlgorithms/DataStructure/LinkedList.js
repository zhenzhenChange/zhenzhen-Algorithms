/**
 * 模拟链表操作（双向、未排序）
 *
 * @param {*} key 元素 x 的关键字值
 */
class LinkedList {
  static Head = null;

  constructor(key) {
    this.key = key;
    this.next = null;
    this.prev = null;
  }

  /**
   * 查找第一个关键字为 key 的元素
   *
   * 时间复杂度：O(n)
   *
   * @param {*} key
   * @returns {LinkedList}
   */
  static Search(key) {
    let x = LinkedList.Head;

    while (x != null && x.key != key) x = x.next;

    return x;
  }

  /**
   * 将元素 x 插入链表前端
   *
   * 时间复杂度：O(1)
   *
   * @param {LinkedList} x
   */
  static Insert(x) {
    x.next = LinkedList.Head;
    LinkedList.Head.prev = x;

    x.prev = null;
    LinkedList.Head = x;
  }

  /**
   * 将元素 x 从链表中删除
   *
   * 时间复杂度：O(1)
   *
   * @param {LinkedList} x
   */
  static Delete(x) {
    x.prev != null ? (x.prev.next = x.next) : (LinkedList.Head = x.next);
    if (x.next != null) x.next.prev = x.prev;
  }
}

const L01 = new LinkedList(1);
const L04 = new LinkedList(4);
const L09 = new LinkedList(9);
const L16 = new LinkedList(16);
const L25 = new LinkedList(25);

L09.next = L16;

L16.prev = L09;
L16.next = L04;

L04.prev = L16;
L04.next = L01;

L01.prev = L04;

LinkedList.Head = L09;

console.log(LinkedList.Head);
console.log(LinkedList.Search(4));
console.log(LinkedList.Search(25));
LinkedList.Insert(L25);
console.log(LinkedList.Head);
console.log(LinkedList.Search(9));
LinkedList.Delete(L09);
console.log(LinkedList.Head);
console.log(LinkedList.Search(9));
