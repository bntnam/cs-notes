# 344. Reverse String

> Write a function that reverses a string. The input string is given as an array of characters char[].
>
> Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
>
> You may assume all the characters consist of printable ascii characters.

```
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
```

### Example:

#### 1.

```
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

#### 2.

```
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

### Solution:

#### 1. Two Pointers

- Time complexity: O(n)
- Space complexity: O(1)

```javascript
function reverseString(str) {
  let i = 0,
    n = str.length,
    middle = Math.floor(n / 2),
    temp = null;
  for (; i < middle; i++) {
    temp = str[i];
    str[i] = str[n - 1 - i];
    str[n - 1 - i] = temp;
  }
  return str;
}
```

#### 2. Array Method

- Time complexity: O(n)
- Space complexity: O(1)

```javascript
function reverseString(str) {
  return str.reverse();
}
```
