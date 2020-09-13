/**
 * 用两个栈实现队列
 *
 * 时间复杂度：O(1)
 * 空间复杂度：O(n)
 */
var CQueue = function () {
  this.queue = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.queue[this.queue.length] = value;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.queue.length == 0) return -1;
  return this.queue.shift();
};
