# Quick Sort

> Quick Sort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

<p align="center"><img src="js/sortingAlgorithms/quickSort/quickSort.png" width="600px" /></p>

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.edureka.co/blog/quick-sort-in-cpp">edureka</a></p>

#### Time Complexity

|            |   Best    |  Average  |      Worst       |
| ---------- | :-------: | :-------: | :--------------: |
| Quick Sort | O(n logn) | O(n logn) | O(n<sup>2</sup>) |

#### Implementation

```javascript
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start];
  var swapIndex = start;

  for (var i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    var pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
```
