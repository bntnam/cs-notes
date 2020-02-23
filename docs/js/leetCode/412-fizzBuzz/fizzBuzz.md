# 412. Fizz Buzz

> Write a program that outputs the string representation of numbers from 1 to n.
>
> But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

### Example:

```
Input: n = 15
Output: [
          "1", 
          "2", 
          "Fizz", 
          "4", 
          "Buzz", 
          "Fizz", 
          "7", 
          "8", 
          "Fizz", 
          "Buzz", 
          "11", 
          "Fizz", 
          "13", 
          "14", 
          "FizzBuzz"
        ]
```

### Solution:

#### 1.

```javascript
function fizzBuzz(n) {
  return Array(n)
    .fill(0)
    .map(
      (ele, i) =>
        (++i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || "" + i
    );
}
```

#### 2.

```javascript
var fizzBuzz = function(n) {
  var results = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i.toString());
    }
  }
  return results;
};
```

#### 3.

```javascript
function fizzBuzz(n) {
  var results = [];
  for (var i = 1; i <= n; i++) {
    var str = "";
    i % 3 === 0 ? (str += "Fizz") : null;
    i % 5 === 0 ? (str += "Buzz") : null;
    !str ? (str += i.toFixed()) : null;
    results.push(str);
  }
  return results;
}
```
