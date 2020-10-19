interface ILinkedList<T> {
  insertInBegin(data: T): Node<T>
  // insertAtEnd(data: T): Node<T>
  // deleteNode(node: Node<T>): void
  // traverse(): T[]
  getSize(): number
  // search(comparator: (data: T) => boolean): Node<T> | null
}

class Node<T> {
  public data: Node<T> | null
  public next: Node<T> | null
  constructor(data: Node<T>) {
    this.data = data
    this.next = null
  }
}

class LinkedList<T> implements ILinkedList<T> {
  head: Node<T> | null
  size: number
  constructor() {
    this.head = null
    this.size = 0
  }

  insertInBegin<T>(data: T): Node<T> {
    const newNode = new Node<T>(data)

    if (!this.head) {
      this.head = newNode
      this.size++
    } else {
      this.head.next = newNode
      newNode.next = this.head
      this.head = newNode
      this.size++
    }
    return newNode
  }

  getSize(): number {
    return this.size
  }
}

const ll = new LinkedList<number>()
console.log(ll.insertInBegin(2))
console.log(ll.insertInBegin(1))
console.log(ll.getSize())
