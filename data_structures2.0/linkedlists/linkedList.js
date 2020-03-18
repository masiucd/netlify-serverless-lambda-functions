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

  showList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
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

  get(idx) {
    let current = this.head;
    let count = 0;
    while (idx !== count) {
      count += 1;
      current = current.next;
    }
    return current;
  }

  insert(idx, data) {
    const newNode = new Node(data);
    const prev = this.get(idx - 1);
    const pointer = prev.next;
    prev.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  delete(idx) {
    const prev = this.get(idx - 1);
    const removedNode = prev.next;
    prev.next = removedNode.next;
    this.size -= 1;
    return this;
  }

  reverse() {}
}

const xs = new ListXS();
xs.insertFirst(1);
xs.insertFirst(2);
xs.insertLast(3);
xs.insert(1, 99);
xs.delete(1);
console.log(xs.showList());
