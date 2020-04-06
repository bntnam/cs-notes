# 283. Move Zeroes

> Given two strings s and t , write a function to determine if t is an anagram of s.
>
> Note: You may assume the string contains only lowercase alphabets.
```
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
```

### Example:

#### 1.

```
Input: s = "anagram", t = "nagaram"
Output: true
```

### Solution:

#### 1. Two Pointers

- Time complexity: O(n)
- Space complexity: O(1)

```javascript
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let hash = {};
  for (let char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }
  for (let char of t) {
    if (!hash[char]) return false;
    hash[char]--;
  }
  return true;
};
```

#### 2. Sorting + ES6

- Time complexity: O(nlogn)
- Space complexity: O(1)

```javascript
function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
```
