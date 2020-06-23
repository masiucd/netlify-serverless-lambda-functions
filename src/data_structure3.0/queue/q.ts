function Queue<T>() {
  const queue: Array<T> = [];

  return {
    enqueue(data: T) {
      queue.unshift(data);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    showQ() {
      return queue;
    },
    size() {
      return queue.length;
    },
  };
}

// let q = Queue();
// q.enqueue('walk home');
// q.enqueue('cook food');
// q.enqueue('run for a fun');
// console.log(q.showQ());
// console.log(q.peek());
// q.dequeue();
// console.log(q.showQ());

export default Queue;

