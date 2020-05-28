class MyArray {
  length: number;

  data: Object;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value: number | string) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return last;
  }

  getLength() {
    return this.length;
  }
}

const arr = new MyArray();

arr.push('a');
arr.push('b');
console.log(arr.pop());
console.log(arr.getLength());
