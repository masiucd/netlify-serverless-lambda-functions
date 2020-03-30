/* eslint-disable prefer-const */
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class MyTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(data) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data === currentNode.data) return currentNode;
    }
    return false;
  }
}

const tree = new MyTree();
tree.insert(6);
tree.insert(2);
tree.insert(3);
tree.insert(312);
// console.log(tree);
console.log(tree.find(12));
