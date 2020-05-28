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
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this;
  }

  showNodes() {
    let node = this.first;
    const xs = [];
    while (node !== null) {
      xs.push(node.data);
      node = node.next;
    }
    return { nodes: xs, size: this.size };
  }

  // remove from front
  dequeue() {
    if (!this.first) return undefined;
    this.first = this.first.next;
    this.size -= 1;
    return this;
  }
}
const q = new Queue();
q.enqueue(2);
q.enqueue(1);
q.enqueue(4);
q.dequeue();
q.dequeue();
console.log(q.showNodes());
