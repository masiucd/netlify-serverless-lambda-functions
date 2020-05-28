class Arr {
  dataa: Object;

  length: number;

  constructor() {
    this.dataa = {};
    this.length = 0;
  }

  getLength() {
    return this.length;
  }

  push(value: number | string) {
    this.dataa[this.length] = value;
    this.length += 1;
    return this.dataa;
  }

  pop() {
    const lastValue = this.dataa[this.length - 1];
    delete this.dataa[this.length - 1];
    this.length -= 1;
    return lastValue;
  }
}

const a = new Arr();

// console.log(a);
a.push('a');
a.push('b');
// console.log(a);
console.log(a.pop());
console.log(a);
