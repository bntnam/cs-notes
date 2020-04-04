# 206. Reverse Linked List

> Reverse a singly linked list.

### Example:

#### 1.

```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

### Solution:

#### 1. Recursive

- Time complexity: O(n)
- Space complexity: O(1)

```javascript
function reverseList(head) {
  if (!head) return undefined;
  let prev = null;
  let current = head;
  let next;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
```

#### 2. Non-recursive

- Time complexity: O(n)
- Space complexity: O(n)

```javascript
function reverseList(head) {
  function helper(current, prev) {
    if (current === null) return prev;
    let next = current.next;
    current.next = prev;
    return helper(next, current);
  }
  return helper(head, null);
}
```
