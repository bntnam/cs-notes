# 108. Convert Sorted Array to Binary Search Tree

> Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
>
> For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
```

### Example:

#### 1.

```
Input: [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
```

### Solution:

#### 1. Recursive

- Time complexity: O(n)
- Space complexity: O(logn)

```javascript
function sortedArrayToBST(nums) {
  if (!nums) return null;
  function helper(low, high) {
    if (low > high) return null;
    let mid = Math.floor((low + high) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = helper(low, mid - 1);
    root.right = helper(mid + 1, high);
    return root;
  }
  return helper(0, nums.length - 1);
};
```

#### 2. ES6

- Time complexity: O(n)
- Space complexity: O(logn)

```javascript
function sortedArrayToBST(nums) {
  if (!nums) return null;
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};
```
