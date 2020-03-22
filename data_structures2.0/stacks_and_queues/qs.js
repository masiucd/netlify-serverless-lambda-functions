/**
 * Initialize your data structure here.
 */
const MyQueue = function() {
  this.first = [];
  this.last = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const { length } = this.first;
  for (let i = 0; i < length; i++) {
    this.last.push(this.first.pop());
  }
  this.last.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const { length } = this.last;
  for (let i = 0; i < length; i++) {
    this.first.push(this.last.pop());
  }
  const res = this.first.pop();
  return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.last.length > 0) {
    return this.last[0];
  }
  return this.first[this.first.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.first.length <= 0 && this.last.length <= 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const qs = new MyQueue();
qs.push(6);
qs.push(12);
qs.push(99);
qs.push(14);
qs.pop();
console.log(qs.peek());
console.log(qs.empty());
