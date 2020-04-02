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

## 1.3. URLify

> Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

#### Example:

```
Input: "Mr John Smith    ", 13
Output: "Mr%20John%20Smith"
```

#### Solution:

- O(n)

```javascript
function urlify(str) {
  let strArr = str.trim().split("");
  for (let i in strArr) {
    if (strArr[i] === " ") {
      strArr[i] = "%20";
    }
  }
  return strArr.join("");
}
```
