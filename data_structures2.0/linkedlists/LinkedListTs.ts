interface INode {
  data?: INode | number | null;
  next?: INode | null;
}
class Node_ {
  data: number | INode;

  next: INode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class MyLinkedList {
  head: INode | null;

  tail: INode | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  showNodes() {}

  append(data) {}

  prepend(data) {}

  get(index) {}

  insert(data, index) {}
}

const ll = new MyLinkedList();
ll.append(6);
ll.append(3);
ll.append(99);
ll.prepend(5);
ll.prepend(1);
ll.insert(77, 2);
console.log(ll.showNodes());
