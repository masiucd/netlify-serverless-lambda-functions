/**
 *
 * @param {number} val
 */
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function(val) {
  const newNode = new Node(val);
  if (!this.root) {
    this.root = newNode;
    return this;
  }
  let current = this.root;
  while (true) {
    if (val === current.val) return null;
    if (val < current.val) {
      if (current.left === null) {
        current.left = newNode;
        return this;
      }
      current = current.left;
    } else if (val > current.val) {
      if (current.right === null) {
        current.right = newNode;
        return this;
      }
      current = current.right;
    }
  }
};

BST.prototype.find = function(val) {
  if (!this.root) return false;
  if (val === this.root) return this.root;
  let found = false;
  let current = this.root;

  while (current && !found) {
    if (val < current.left) {
      current = current.left;
    } else if (val > current.val) {
      current = current.right;
    } else {
      found = true;
    }
  }
  if (!found) return false;
  return current;
};

const tree = new BST();

tree.root = new Node(10);
tree.root.left = new Node(8);
tree.root.right = new Node(17);
tree.root.left.right = new Node(9);
tree.insert(67);
tree.insert(17);
console.log(tree);
console.log(tree.find(17));
