/**
 * 模拟栈操作（后进后出）
 *
 * @param {*} stack 数组（包含栈）
 */
class Stack {
  static Top = -1;

  constructor(stack) {
    this.stack = stack;
  }

  /**
   * 判空操作
   *
   * 时间复杂度：O(1)
   *
   * @returns {boolean}
   */
  IsEmpty() {
    return Stack.Top == -1;
  }

  /**
   * 入栈操作
   *
   * 时间复杂度：O(1)
   *
   * @param {*} item
   */
  Push(item) {
    this.stack[++Stack.Top] = item;
  }

  /**
   * 出栈操作
   *
   * 时间复杂度：O(1)
   *
   * @returns {*}
   */
  Pop() {
    // => 栈下溢 underflow
    if (this.IsEmpty()) throw new TypeError("Stack is empty");

    return this.stack[Stack.Top--];
  }
}

const stack = new Stack([]);
console.log(Stack.Top);
console.log(stack.IsEmpty());
stack.Push(5);
console.log(Stack.Top);
console.log(stack.IsEmpty());
stack.Pop();
console.log(Stack.Top);
console.log(stack.IsEmpty());
