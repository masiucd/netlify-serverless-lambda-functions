interface INode {
  data: number | null;
  next: INode | null;
}

class Node {
  data: number | null;

  next: INode | null;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: INode | null;

  tail: INode | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data: number) {
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

  insertEnd(data: number) {
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
    const xs: number[] = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      xs.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return {
      nodes: xs,
      size: this.size,
    };
  }

  getNode(index: number): INode {
    let counter = 0;
    let node = this.head;
    while (index !== counter) {
      counter += 1;
      node = node.next;
    }
    return node;
  }

  insert(index: number, data: number) {
    if (index === 0) return this.insertFirst(data);
    if (index < 0 || index > this.size) return undefined;
    const newNode = new Node(data);
    const prevNode = this.getNode(index - 1);
    const pointer = prevNode.next;
    prevNode.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  removeHead() {
    if (!this.head.next) return undefined;
    this.head = this.head.next;
    this.size -= 1;
    return this;
  }

  remove(index: number) {
    if (index === 0) return this.removeHead();
    if (index < 0 || index > this.size) return undefined;
    const prevNode = this.getNode(index - 1);
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    this.size -= 1;
    return this;
  }

  isEmpty() {
    return this.size === 0;
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
ll.insertFirst(8);
ll.insertEnd(321);
ll.insertFirst(12);
ll.insertEnd(22);
ll.insert(3, 100);
ll.insert(0, 200);
ll.removeHead();
ll.remove(3);
ll.reverse();
console.log(ll.showList());
