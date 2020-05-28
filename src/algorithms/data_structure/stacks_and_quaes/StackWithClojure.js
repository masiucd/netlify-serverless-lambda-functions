function Stack() {
  const data = [];

  return {
    push(val) {
      return data.push(val);
    },
    pop() {
      return data.pop();
    },
    size() {
      return data.length;
    },
    first() {
      return data[0];
    },
    last() {
      return data[data.length - 1];
    },
    checkData() {
      return data;
    },
  };
}

const stack = new Stack();

stack.push(4);
stack.push(2);
stack.push(1);
stack.push(10);
stack.pop();

console.log(stack.size());
console.log(stack.first());
console.log(stack.last());
console.log(stack.checkData());
