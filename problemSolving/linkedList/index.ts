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
}

const ll = new LinkedList();
ll.insertFirst(8);
ll.insertFirst(12);
ll.insertEnd(22);
console.log(ll.showList());
