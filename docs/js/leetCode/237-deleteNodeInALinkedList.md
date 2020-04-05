# 237. Delete Node in a Linked List

> Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
```

### Example:

#### 1.

```
Input: [4,5,1,9]
Output: [4,1,9]
```

### Solution:

#### 1. Swap with Next Node

- Time complexity: O(1)
- Space complexity: O(1)

```javascript
function deleteNode(head) {
  node.val = node.next.val;
  node.next = node.next.next;
}
```
