/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
class Node {
  /**
   *
   * @param {string} data
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.size = 0);
  }



  /**
   *
   * @param {string} data
   * @returns {this}
   */
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }

  /**
   * @returns {void}
   */
  traverse() {
    let curr = this.head;
    while (curr) {
      console.log('Iam node with the value of ', curr.data);
      curr = curr.next;
      console.log('end of the list');
    }
  }

  /**
   * @returns {this}
   */
  removeAtEnd() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size -= 1;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /**
   * @returns {this}
   */
  removeFromStart() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = current.next;
    this.size -= 1;
    return current;
  }

  /**
   *
   * @param {string} data
   * @returns {this}
   */
  insertStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    return this;
  }

  /**
   *
   * @param {number} index
   * @returns {this}
   */
  get(index) {
    if (index >= this.size || index < 0) return null;
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter += 1;
    }
    return node;
  }

  /**
   *
   * @param {number} index
   * @param {string} data
   * @returns {boolean}
   */
  set(index, data) {
    let targetNode = this.get(index);
    if (targetNode) {
      targetNode.data = data;
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
  insertInto(index, data) {
    if (index < 0 || index > this.size) return false;
    if (index === this.size) return !!this.insertAtEnd(data);
    if (index === 0) return !!this.insertStart(data);

    let newNode = new Node(data);
    let prev = this.get(index - 1);
    let pointer = prev.next;
    prev.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return true;
  }

  /**
   *
   * @param {number} index
   * @returns {this}
   */
  remove(index) {
    if (index < 0 || index > this.size) return undefined;
    if (index === this.size - 1) this.removeAtEnd();
    if (index === 0) this.removeFromStart();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.size -= 1;
    return removed;
  }

  /**
   * @returns {string[]}
   */
  get print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  /**
   * @returns {this}
   */
  reverse() {
    let node = this.head;
    // SWAP
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.size; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const ll = new LinkedList();
ll.insertAtEnd('hello');
ll.insertAtEnd('I like bananas');
ll.insertAtEnd('keep it real');
ll.set(0, '!!!');
ll.insertInto(1, 'masiu');
ll.insertInto(2, 'Karol');
// console.log(ll);
ll.reverse();
// console.log(ll.print);
console.log(ll.printList());
