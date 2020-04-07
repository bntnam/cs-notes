# 217. Contains Duplicate

> Given an array of integers, find if the array contains any duplicates.
>
> Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
```

### Example:

#### 1.

```
Input: [1,2,3,1]
Output: true
```

#### 2.

```
Input: [1,2,3,4]
Output: false
```

#### 3.

```
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```

### Solution:

#### 1. Hash Table

- Time complexity: O(n)
- Space complexity: O(n)

```javascript
function containsDuplicate(nums) {
  if (!nums) return null;
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    if (hash[key] >= 2) return true;
  }
  return false;
}
```

#### 2. Sorting

- Time complexity: O(n logn)
- Space compexity: O(1)

```javascript
function containsDuplicate(nums) {
  if (!nums) return null;
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
}
```
