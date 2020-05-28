// LIFO (Last In First Out)

function Stack() {
  this.data = [];
}

const stack = new Stack();

/**
 * @param {number | string}
 * @returns {string[] | number[]}
 */
Stack.prototype.insert = function(value) {
  this.data.push(value);
  return this.data;
};

Stack.prototype.pop = function() {
  this.data.pop();
};

stack.insert('Harry');
stack.insert('Harmione');
stack.insert('Ron');
stack.pop();
console.log(stack);
