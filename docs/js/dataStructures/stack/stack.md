# Stack

> A stack is a LIFO (last-in-first-out) data structure. The last element added to the stack will be the first element removed from the stack.

<p align="center"><img src="js/dataStructures/stack/stack.png" width="600px" /></p>

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.softwaretestinghelp.com/stack-in-cpp/">Software Testing Help</a></p>

#### Summary

- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
- They are not a built in data structure in JavaScript, but are relatively simple to implement.

#### Implementation

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```
