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

class Stack {
  top: null | INode;

  bottom: null | INode;

  size: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  peek() {
    return this.top;
  }

  // always to the head
  push(data: number): this {
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    }
    const pointer = this.top;
    this.top = newNode;
    this.top.next = pointer;
    this.size += 1;
    return this;
  }

  pop(): this {
    if (!this.top.next) return undefined;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.size -= 1;
    return this;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

const stack = new Stack();
stack.push(7);
stack.push(12);
stack.push(345);
stack.push(122);
// stack.pop();
console.log(stack);
