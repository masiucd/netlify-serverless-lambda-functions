class StackArr {
  data: number[];

  constructor() {
    this.data = [];
  }

  peek() {
    if (this.data.length > 0) {
      return this.data[0];
    }
    return null;
  }

  push(data: number): this {
    this.data.push(data);
    return this;
  }

  pop(): this {
    if (this.data.length > 0) {
      this.data.pop();
    }
    return this;
  }

  isEmpty(): boolean {
    return this.data.length <= 0;
  }
}

const s = new StackArr();
s.push(5);
s.push(1);
s.push(3);
s.push(88);
s.pop();
s.pop();
console.log(s);
// console.log(s.isEmpty());
// console.log(s.peek());
