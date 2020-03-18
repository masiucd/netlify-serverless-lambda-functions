/* eslint-disable prefer-const */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  showNodes() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  /**
   *
   * @param {number} data
   */
  addFromBegin(data) {
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
   * @param {number} data
   */
  addFromEnd(data) {
    const newNode = new Node(data);
    if (!this.head.next) {
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
   *
   * @param {number} index
   */
  get(index) {
    let counter = 0;
    let node = this.head;
    while (index !== counter) {
      counter += 1;
      node = node.next;
    }
    return node;
  }

  insert(index, data) {
    if (index === 0) return this.addFromBegin(data);
    if (index > this.size) return null;
    let newNode = new Node(data);
    let prevNode = this.get(index - 1);
    let nodePointer = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nodePointer;
    this.size += 1;
    return this;
  }

  deleteFromHead() {
    if (!this.head) return null;
    this.head = this.head.next;
    return this.head;
  }

  delete(index) {
    if (index === 0) return this.deleteFromHead();
    if (index > this.size) return null;
    let prevNode = this.get(index - 1);
    let deletedNode = prevNode.next;
    prevNode.next = deletedNode.next;
    this.size -= 1;
    return this;
  }
}

const myLL = new LinkedList();
myLL.addFromBegin(5);
myLL.addFromBegin(2);
myLL.addFromBegin(99);
myLL.addFromEnd(22);
myLL.insert(2, 101);
myLL.delete(0);
console.log(myLL.showNodes());
