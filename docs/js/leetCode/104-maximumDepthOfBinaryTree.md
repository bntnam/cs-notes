# 104. Maximum Depth of Binary Tree

> Given a binary tree, find its maximum depth.
>
> The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
>
> Note: A leaf is a node with no children.

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
```

### Example:

#### 1.

```
Input: [3,9,20,null,null,15,7]
Output: 3
```

### Solution:

#### 1. Recursive

- Time complexity: O(n)
- Space compexity: O(n)

```javascript
function maxDepth(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
```

#### 2. Non-recursive

- Time complexity: O(n)
- Space complexity: O(n)

```javascript
function maxDepth(root) {
  if (!root) return 0;
  let queue = [root];
  max = 0;
  while (queue.length > 0) {
    let len = queue.length;
    max++;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return max;
}
```
