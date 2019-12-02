# Selection Sort

> Selection sort is an algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

![](selection-sort.png)

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.w3resource.com/php-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php">w3resource</a></p>

#### Time Complexity

|                |       Best       |     Average      |      Worst       |
| -------------- | :--------------: | :--------------: | :--------------: |
| Selection Sort | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n<sup>2</sup>) |

#### Implementation

```javascript
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if ( i !== lowest ) swap(arr, i, lowest);
  }
  return arr;
}
```
