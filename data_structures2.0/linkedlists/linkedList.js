// 10 --> 5 -- > 15
const showCase = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 15,
        next: null,
      },
    },
  },
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class ListXS {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  showNodes() {
    const list = [];
    let current = this.head;

    while (current !== null) {
      list.push(current.data);
      current = current.next;
    }
    return list;
  }

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

  getSize() {
    return this.size;
  }

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

  get(index) {
    let node = this.head;
    let counter = 0;
    while (index !== counter) {
      counter += 1;
      node = node.next;
    }
    return node;
  }

  removeFromHead() {
    if (this.size === 0) return undefined;
    this.head = this.head.next;
    this.size -= 1;
    return this;
  }

  insert(index, data) {
    if (index > this.size) return undefined;
    if (index < 0 || index === 0) return this.insertFirst(data);
    const newNode = new Node(data);
    const prevNode = this.get(index - 1);
    const pointer = prevNode.next;
    prevNode.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  delete(index) {
    const prevNode = this.get(index - 1);
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    this.size -= 1;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
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

const xs = new ListXS();
xs.insertFirst(3);
xs.insertFirst(2);
xs.insertLast(212);
xs.insertLast(24);
xs.insertLast(14);
xs.insert(1, 100);
xs.delete(2);
xs.reverse();
xs.removeFromHead();

console.log(xs.showNodes());
