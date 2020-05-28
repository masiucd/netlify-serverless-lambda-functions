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

  /**
   *
   * @param {string} data
   */
  insertFirst(data) {
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
   * @param {string} data
   */
  insertLast(data) {
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

  showList() {
    const xs = [];
    let node = this.head;
    while (node !== null) {
      xs.push(node.data);
      node = node.next;
    }
    return xs;
  }

  /**
   *
   * @param {number} index
   */
  get(index) {
    let node = this.head;
    let counter = 0;
    while (index !== counter) {
      counter++;
      node = node.next;
    }
    return node;
  }

  dropHead() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.size -= 1;
    return this;
  }

  /**
   *
   * @param {string} data
   * @param {number} index
   */
  insert(data, index) {
    if (index === 0) return this.insertFirst(data);
    if (index < 0 || index > this.size) return undefined;
    const newNode = new Node(data);
    const prev = this.get(index - 1);
    const pointer = prev.next;
    prev.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  /**
   *
   * @param {number} index
   */
  delete(index) {
    const prev = this.get(index - 1);
    const pointer = prev.next;
    prev.next = pointer.next;
    this.size -= 1;
    return this;
  }

  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const ll = new LinkedList();
ll.insertFirst('apple');
ll.insertFirst('banana');
ll.insertLast('mango');
ll.insertLast('kiwi');
// console.log(ll.get(2));
ll.insert('jackfruit', 2);
ll.insert('jackfruit', 212);
ll.insert('grape', 0);
ll.delete(2);
ll.reverse();
ll.reverse();
console.log(ll.showList());
