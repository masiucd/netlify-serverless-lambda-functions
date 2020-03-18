/* eslint-disable prefer-const */
interface INode {
  data?: INode | number | null;
  next?: INode | null;
}
class Node_ {
  data: number | INode;

  next: INode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class MyLinkedList {
  head: INode | null;

  tail: INode | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  showNodes() {
    let current = this.head;
    const xs = [];
    while (current !== null) {
      xs.push(current.data);
      current = current.next;
    }
    return {
      nodes: xs,
      amount: this.size,
    };
  }

  insertStart(data) {
    const newNode = new Node_(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    return this;
  }

  insertEnd(data) {
    const newNode = new Node_(data);
    if (!this.head.next) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
    return this;
  }

  get(index) {
    let current = this.head;
    let count = 0;
    while (index !== count) {
      count += 1;
      current = current.next;
    }
    return current;
  }

  insert(index, data) {
    if (index === 0) return this.insertStart(data);
    const newNode = new Node_(data);
    const prevNode = this.get(index - 1);
    const pointer = prevNode.next;
    prevNode.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  removeFromStart() {
    if (!this.head) return null;
    const current = this.head;
    this.head = current.next;
    this.size -= 1;
    return this;
  }

  delete(index) {
    if (index > this.size || index < 0) return null;
    if (index === 0) return this.removeFromStart();
    const prevNode = this.get(index - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.size -= 1;
    return this;
  }

  reverse() {
    let list = this.showNodes().nodes;
    list = list
      .map(String)
      .reverse()
      .map(Number);
    return list;
  }

  reverse2() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const ll = new MyLinkedList();
ll.insertStart(2);
ll.insertEnd(6);
ll.insertEnd(12);
ll.insert(2, 200);
ll.delete(1);
ll.reverse();
ll.reverse2();
console.log(ll.showNodes());
