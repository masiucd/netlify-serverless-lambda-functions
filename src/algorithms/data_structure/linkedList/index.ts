class Node {
  data: number;

  next = null;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: null | Node;

  tail: null | Node;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertLast(data: number) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
    return this;
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log('I am the current node with the value of ', currentNode.data);
      currentNode = currentNode.next;
      console.log('end of the list');
    }
  }

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

  removeFromStart() {
    if (!this.head.next) return undefined;
    const current = this.head;
    this.head = current.next;
    this.size -= 1;
    return current;
  }

  insertAtStart(data: number) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
    node.next = this.head;
    this.head = node;
    this.size += 1;
    return this;
  }
}
const ll = new LinkedList();
ll.insertLast(5);
ll.insertLast(2);
ll.insertLast(1);
ll.removeFromStart();
ll.insertAtStart(7);
console.log(ll);
