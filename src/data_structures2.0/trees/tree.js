/* eslint-disable prefer-const */
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (data < currentNode.data) {
          // go left
          if (!currentNode.left) {
            // if there is nothing there
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            // stop looping
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(data) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (currentNode.data === data) return currentNode;
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(231231));

//     9
//  4     20
// 1  6  15  170

function traverse(node) {
  const tree = { data: node.data };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
