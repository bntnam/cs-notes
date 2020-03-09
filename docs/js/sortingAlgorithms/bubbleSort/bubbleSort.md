# Bubble Sort

> Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

<p align="center"><img src="js/sortingAlgorithms/bubbleSort/bubbleSort.png" width="600px" /></p>

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.w3resource.com/csharp-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php">w3resource</a></p>

#### Time Complexity

|             | Best |     Average      |      Worst       |
| ----------- | :--: | :--------------: | :--------------: |
| Bubble Sort | O(n) | O(n<sup>2</sup>) | O(n<sup>2</sup>) |

#### Implementation

```javascript
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
```
