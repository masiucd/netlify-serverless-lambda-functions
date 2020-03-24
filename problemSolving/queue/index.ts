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

class Queue {
  first: null | INode;

  last: null | INode;

  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    return this.first;
  }

  // add to front
  enqueue(data: number) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
    return this;
  }

  showNodes() {
    const xs: number[] = [];
    let node = this.first;
    while (node !== null) {
      xs.push(node.data);
      node = node.next;
    }
    return xs;
  }

  // remove from front
  dequeue() {
    if (!this.first) return false;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return this;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
const q = new Queue();
q.enqueue(77);
q.enqueue(12);
q.enqueue(22);
q.enqueue(1212);
q.dequeue();
console.log(q.showNodes());
console.log(q.isEmpty());
