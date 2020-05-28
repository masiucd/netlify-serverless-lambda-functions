class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   *
   * @param {number | string} val
   * @returns {number}
   */
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const leftHand = this.first;
      this.first = newNode;
      this.first.next = leftHand;
    }
    return ++this.size;
  }

  /**
   * @returns {this}
   */
  pop() {
    if (this.size === 0) return null;
    const current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size -= 1;
    return current.value;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(4);
stack.pop();
console.log(stack);
