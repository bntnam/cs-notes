# Dynamic Programming

> A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

#### Implementation

Solutions of Fibonacci numbers:

- Recursive Solution: O(2<sup>n</sup>)

```javascript
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

- Memoization Solution: O(n)

```javascript
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}
```

- Tabulation Solution: O(n)

```javascript
function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
```
