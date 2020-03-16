# Binary Heap

> A Heap is a special Tree-based data structure in which the tree is a complete binary tree.

> In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children.

> In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

<p align="center"><img src="js/dataStructures/binaryHeap/binaryHeap.png" width="600px" /></p>

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.geeksforgeeks.org/heap-data-structure/">GeeksforGeeks</a></p>

#### Implementation

```javascript
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}
```
