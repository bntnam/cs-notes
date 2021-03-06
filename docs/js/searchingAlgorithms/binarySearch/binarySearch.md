# Binary Search

> Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

<p align="center"><img src="js/searchingAlgorithms/binarySearch/binarySearch.png" width="600px" /></p>

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.geeksforgeeks.org/binary-search/">GeeksforGeeks</a></p>

#### Time Complexity

|               | Best | Average  |  Worst   |
| ------------- | :--: | :------: | :------: |
| Binary Search | O(1) | O(log n) | O(log n) |

#### Implementation

```javascript
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
```
