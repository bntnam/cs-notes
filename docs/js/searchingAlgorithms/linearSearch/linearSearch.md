# Linear Search

> Linear Search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.

![](linearSearch.png)
<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.geeksforgeeks.org/linear-search/">GeeksforGeeks</a></p>

#### Time Complexity

|                |       Best      |      Average     |       Worst      |
|----------------|:---------------:|:----------------:|:----------------:|
| Linear Search  |       O(1)      |        O(n)      |        O(n)      |

#### Implementation

```javascript
function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
```