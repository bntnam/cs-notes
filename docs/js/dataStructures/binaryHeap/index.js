class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    var index = this.values.length - 1;
    var element = this.values[index];
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      var parent = this.values[parentIndex];
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
    var index = 0;
    var length = this.values.length;
    var element = this.values[0];
    while (true) {
      var leftChildIndex = 2 * index + 1;
      var rightChildIndex = 2 * index + 2;
      var leftChild, rightChild;
      var swap = null;
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
    var max = this.values[0];
    var end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}

var heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
