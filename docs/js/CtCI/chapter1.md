## 1.1. Is Unique

> Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

#### Example:

```
Input: "abcd"
Output: true
```

#### Solution:

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

## 1.2. Check Permutation

> Given two strings, write a method to decide if one is a permutation of the other.

#### Example:

```
Input: "abc", "acb"
Output: true
```

#### Solution:

- O(n logn)

```javascript
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  let sortedStr1 = str1
    .split("")
    .sort()
    .join("");
  let sortedStr2 = str2
    .split("")
    .sort()
    .join("");
  return sortedStr1 === sortedStr2;
}
```
