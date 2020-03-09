# Recursion

> Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result.
>
> The base case returns a value without making any subsequent recursive calls.

<p align="center"><img src="js/recursion/recursion.png" width="600px" /></p>

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.geeksforgeeks.org/recursive-functions/">GeeksforGeeks</a></p>

#### Example

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
```
