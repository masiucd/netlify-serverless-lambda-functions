/* eslint-disable prefer-const */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   *
   * @param {string} data
   * @returns {this}
   */
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // set the tai; right before the previous
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }

  /**
   * @returns {this}
   */
  pop() {
    if (!this.head) return null;
    const poppedNode = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.size -= 1;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.size -= 1;
    return oldHead;
  }

  /**
   *
   * @param {string} data
   * @returns {this}
   */
  unshift(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return this;
  }

  /**
   *
   * @param {number} index
   * @returns {this}
   */
  get(index) {
    if (index < 0 || index >= this.size) return null;
    let middle = Math.floor(this.size / 2);
    if (index <= middle) {
      console.log('WORKING FROM START');
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count += 1;
      }
      return current;
    }
    console.log('WORKING FROM END');
    let count = (this.size -= 1);
    let current = this.tail;
    while (count !== index) {
      current = current.prev;
      count -= 1;
    }
    return current;
  }

  /**
   *
   * @param {number} index
   * @param {string} data
   * @returns {boolean}
   */
  set(index, data) {
    let where = this.get(index);
    if (where !== null) {
      where.data = data;
      return true;
    }
    return false;
  }

  /**
   *
   * @param {number} index
   * @param {string} data
   * @returns {boolean}
   */
  insert(index, data) {
    if (index < 0 || index >= this.size) return false;
    if (index === 0) return !!this.unshift(data);
    if (index === this.size) return !!this.push(data);
    // the index before where we want to insert!
    let newNode = new Node(data);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.size += 1;
    return true;
  }

  /**
   *
   * @param {number} index
   * @returns {this}
   */
  delete(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();
    let nodeToDelete = this.get(index);
    nodeToDelete.prev.next = nodeToDelete.next;
    nodeToDelete.next.prev = nodeToDelete.prev;
    nodeToDelete.prev = null;
    nodeToDelete.next = null;
    this.size -= 1;
    return nodeToDelete;
  }
}

const ll = new LinkedList();

ll.push('Harry');
ll.push('Malfoy');
ll.push('Harmione');
ll.push('Dumbledore');
ll.push('Tom Dolder');
ll.push('Lord Voldemort');

console.log(ll);
