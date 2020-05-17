/**
 * 模拟队列操作（先进先出）
 *
 * @param {*} queue 数组（包含队列）
 */
class Queue {
  static Head = 0;
  static Tail = 0;

  constructor(queue) {
    this.queue = queue;
  }

  /**
   * 入队操作
   *
   * 时间复杂度：O(1)
   *
   * @param {*} x
   */
  EnQueue(x) {
    this.queue[Queue.Tail] = x;

    Queue.Tail == this.queue.length - 1 ? (Queue.Tail = 1) : Queue.Tail++;
  }

  /**
   * 出队操作
   *
   * 时间复杂度：O(1)
   *
   * @returns {*}
   */
  DeQueue() {
    const x = this.queue[Queue.Head];

    Queue.Head == this.queue.length - 1 ? (Queue.Head = 1) : Queue.Head++;

    return x;
  }
}

const queue = new Queue(new Array(10));
queue.EnQueue(5);
queue.EnQueue(4);
queue.EnQueue(3);
console.log(queue.DeQueue());
console.log(Queue.Head);
console.log(Queue.Tail);
