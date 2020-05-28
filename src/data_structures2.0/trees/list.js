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

  insertFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return this;
  }

  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
    return this;
  }

  showNodes() {
    const xs = [];
    let node = this.head;
    while (node !== null) {
      xs.push(node.data);
      node = node.next;
    }
    return xs;
  }

  get(index) {
    let count = 0;
    let node = this.head;
    while (index !== count) {
      count += 1;
      node = node.next;
    }
    return node;
  }

  insert(index, data) {
    if (index === 0) return this.insertFirst(data);
    if (index < 0 || index > this.size) return false;
    const newNode = new Node(data);
    const prevNode = this.get(index - 1);
    const pointer = prevNode.next;
    prevNode.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  deleteFirst() {
    if (!this.head) return false;
    this.head = this.head.next;
    this.size -= 1;
    return this;
  }

  delete(index) {
    if (index === 0) return this.deleteFirst();
    if (index < 0 || index > this.size) return false;
    const prevNode = this.get(index - 1);
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    this.size -= 1;
    return this;
  }
}

const ll = new LinkedList();
ll.insertFirst(7);
ll.insertLast(72);
ll.insertFirst(2);
ll.insertLast(12);
ll.insert(2, 3);
ll.delete(1);
ll.delete(0);
console.log(ll.showNodes());
