# 1.1. Is Unique

> Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

- O(n<sup>2</sup>)

```javascript
function isUnique(str) {
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}
```
