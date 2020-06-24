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

  print(): Array<string> {
    let xs: string[] = [];
    let current = this.head;
    while (current !== null) {
      xs.push(`-> ${current.data}`);
      current = current.next;
    }
    return xs;
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
}

let ll = new LinkedList();
ll.push('A');
ll.push('B');
ll.push('C');
ll.push('D');
ll.unshift('L');
console.log(ll.print());

export { INode, LinkedList };

