// FIFI = first in first out
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Q {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   *
   * @param {number | string} data
   * @returns {number}
   */
  enqueue(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return (this.size += 1);
  }

  /**
   * @returns {string | number}
   */
  dequeue() {
    if (this.size === 0) return null;
    const left = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return left.val;
  }
}

const q = new Q();

console.log(q);
