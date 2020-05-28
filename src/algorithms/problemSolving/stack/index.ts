interface INode {
  data: number | null;
  next: INode | null;
}

class Node_ {
  data: number | null;

  next: INode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  top: INode | null;

  bottom: INode | null;

  size: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  peek() {
    return this.top;
  }

  // push(data: number) {
  //   const newNode = new Node_(data);
  //   if (!this.top) {
  //     this.top = newNode;
  //     this.bottom = newNode;
  //   }
  //   newNode.next = this.top;
  //   this.top = newNode;
  //   this.size += 1;
  //   return this;
  // }
  push(data: number) {
    const newNode = new Node_(data);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.size += 1;
    return this;
  }

  pop() {
    if (this.size === 0) {
      return undefined;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    // this.top = this.top.next
    // console.log('TOP!!!', this.top);
    // console.log('BOTTOM!!', this.bottom);
    this.top = this.top.next;
    console.log((this.top = this.top.next));
    this.size -= 1;
    return this;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const s = new Stack();
s.push(8);
s.push(12);
s.push(99);
s.pop();
s.pop();
s.pop();
