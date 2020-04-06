# 169. Majority Element

> Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
>
> You may assume that the array is non-empty and the majority element always exist in the array.

```
/**
 * @param {number[]} nums
 * @return {number}
 */
```

### Example:

#### 1.

```
Input: [3,2,3]
Output: 3
```

#### 2.

```
Input: [2,2,1,1,1,2,2]
Output: 2
```

### Solution:

#### 1. Hash Table

- Time complexity: O(n)
- Space complexity: O(n)

```javascript
function majorityElement(nums) {
  let data = {};
  for (let i = 0; i < nums.length; i++) {
    data[nums[i]] ? data[nums[i]]++ : (data[nums[i]] = 1);
    if (data[nums[i]] > nums.length / 2) return nums[i];
  }
  return -1;
}
```

#### 2. ES6

- Time complexity: O(n logn)
- Space complexity: O(1)

```javascript
function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}
```
