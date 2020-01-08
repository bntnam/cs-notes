# Binary Search Tree

> Tree is a data structure that consists of nodes in a parent/child relationship.

> Binary Tree, which is a tree, has a special condition that each node can have a maximum of two children.

> Binary Search Tree is a node-based binary tree data structure which has the following properties:
>- Every node to the left of a parent node is always less than the parent.
>- Every node to the right of a parent node is always greater than the parent.

![](binarySearchTree.png)

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://en.wikipedia.org/wiki/Binary_search_tree">Wikipedia</a></p>


#### Implementation

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}
```
