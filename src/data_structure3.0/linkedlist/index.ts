class INode<T> {
  data: T;
  next: INode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val: T) {
    let newNode = new INode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return this;
    }

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
    return this;
  }
  unshift(val: T) {
    let newNode = new INode(val);
    if (!this.head) {
      return this.push(val);
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size += 1;
      return this;
    }
  }

  print(): string {
    let xs: T[] = [];
    let current = this.head;
    while (current !== null) {
      xs.push(current.data);
      current = current.next;
    }
    return xs.join(' ---> ');
  }

  pop() {
    if (this.isEmpty()) return false;
    let node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size--;
    }
    let currentNode = this.head;
    let pointer;
    while (currentNode) {
      if (currentNode.next === this.tail) {
        pointer = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    pointer.next = null;
    this.tail = pointer;
    this.size--;
    return this;
  }
  isEmpty(): boolean {
    return this.size === 0;
  }
  getAt(index: number) {
    let node = this.head;
    if (this.isEmpty()) return node;
    let count = 0;
    while (index !== count) {
      count += 1;
      node = node.next;
    }
    return node;
  }
  insertAt(index: number, val: T) {
    if (index < 0 || index > this.size) return false;
    if (this.size === 0) return this.unshift(val);
    let newNode = new INode<T>(val);
    let prev: INode<T> = this.getAt(index - 1);
    let pointer = prev.next;
    prev.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }
  deleteFromFirst() {
    if (!this.head) return false;
    let current = this.head;
    this.head = current.next;
    this.size--;
    return this;
  }
  removeAt(index: number) {
    if (index < 0 || index > this.size) return false;
    if (this.size === 0) return this.deleteFromFirst();
    let prev = this.getAt(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.size -= 1;
    return this;
  }
}

export { INode, LinkedList };

