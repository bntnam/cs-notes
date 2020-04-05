# 283. Move Zeroes

> Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
```

### Example:

#### 1.

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

### Solution:

#### 1. Two Pointers

- Time complexity: O(n)
- Space complexity: O(1)

```javascript
function moveZeroes(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }
  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}
```

#### 2. ES6

- Time complexity: O(n^2)
- Space complexity: O(1)

```javascript
function moveZeroes(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
}
```
