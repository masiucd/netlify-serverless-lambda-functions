import Queue from './q.ts';

function createPriorityQueue<T>() {
  const low = Queue();
  const high = Queue();
  return {
    enqueue(item: T, isHight: boolean = false) {
      isHight ? high.enqueue(item) : low.enqueue(item);
    },
    dequeue() {
      if (high.size() > 0) {
        high.dequeue();
      } else {
        low.dequeue();
      }
    },
    peek() {
      if (high.size() > 0) {
        return high.peek();
      } else {
        return low.peek();
      }
    },
    length(): number {
      return high.size() + low.size();
    },
    isEmpty(): boolean {
      return high.size() + low.size() === 0;
    },
  };
}

let qq = createPriorityQueue();
qq.enqueue('fix a bug');
qq.enqueue('fix a another bug');
qq.enqueue('a new sprint');
qq.enqueue('high priority', true);
// qq.dequeue();
// qq.dequeue();
// qq.dequeue();
console.log(qq.length());
console.log(qq.peek());

