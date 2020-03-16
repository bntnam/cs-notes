# Insertion Sort

> Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.

<p align="center"><img src="js/sortingAlgorithms/insertionSort/insertionSort.png" width="600px" /></p>

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.w3resource.com/csharp-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-6.php">w3resource</a></p>

#### Time Complexity

|               | Best |     Average      |      Worst       |
| ------------- | :--: | :--------------: | :--------------: |
| Insetion Sort | O(n) | O(n<sup>2</sup>) | O(n<sup>2</sup>) |

#### Implementation

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```
