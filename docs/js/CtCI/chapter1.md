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
Input: "Mr John Smith    "
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

## 1.4. Palindrome Permutation

> Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

#### Example:

```
Input: "Tact Coa"
Output: true
```

#### Solution:

- O(n)

```javascript
function palindromePermutation(str) {
  str = str.toLowerCase();
  let data = {};
  for (let i in str) {
    if (str[i] === " ") continue;
    if (data[str[i]] === undefined) data[str[i]] = 1;
    else delete data[str[i]];
  }
  return Object.keys(data).length <= 1;
}
```

```javascript
function palindromePermutation(str) {
  str = str.toLowerCase();
  let set = new Set();
  for (let char of str) {
    if (char !== " ") {
      if (set.has(char)) set.delete(char);
      else set.add(char);
    }
  }
  return set.size <= 1;
}
```

## 1.5. One Away

> There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

#### Example:

```
Input: "code", "codee"
Output: true
```

#### Solution:

- O(n)

```javascript
function oneAway(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let i,
    j,
    isInserted = len1 < len2,
    isDeleted = len1 > len2,
    isEdited = false;
  if (Math.abs(len1 - len2) > 1) return false;
  for (i = 0, j = 0; i < len1 && j < len2; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (isEdited) return false;
      else if (isInserted) j--;
      else if (isDeleted) i--;
      isEdited = true;
    }
  }
  return true;
}
```
