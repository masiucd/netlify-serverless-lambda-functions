class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedListXs {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  showList() {
    const list = [];
    let current = this.head;
    while (current !== null) {
      list.push(current.data);
      current = current.next;
    }
    return {
      nodes: list,
      size: this.size,
    };
  }

  insertEnd(data) {
    const newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }

  insertStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return this;
  }

  get(index) {
    let currentNode = this.head;
    let counter = 0;
    while (index !== counter) {
      counter += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, data) {
    const newNode = new Node(data);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.size += 1;
    return this;
  }

  delete(index) {}
}

const myLL = new LinkedListXs();
myLL.insertEnd(7);
myLL.insertEnd(2);
myLL.insertStart(100);
myLL.insertStart(200);
myLL.insert(1, 777);
console.log(myLL.showList());
