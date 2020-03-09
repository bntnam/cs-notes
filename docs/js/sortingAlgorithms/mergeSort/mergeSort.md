# Merge Sort

> Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

![](merge-sort.png)

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.wikiwand.com/en/Merge_sort">Wikiwand</a></p>

#### Time Complexity

|            |   Best    |  Average  |   Worst   |
| ---------- | :-------: | :-------: | :-------: |
| Merge Sort | O(n logn) | O(n logn) | O(n logn) |

#### Implementation

```javascript
function merge(arr1, arr2) {
  var results = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```
