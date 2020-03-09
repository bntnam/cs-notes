# Radix Sort

> Radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their individual digits.

![](radix-sort.png)

<p style="color: #888888; text-align: center; margin-top: -20px;">Source: <a href="https://www.programiz.com/dsa/radix-sort">Programiz</a></p>

#### Time Complexity

|            | Best  | Average | Worst |
| ---------- | :---: | :-----: | :---: |
| Radix Sort | O(nk) |  O(nk)  | O(nk) |

#### Implementation

```javascript
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  var maxDigits = 0;
  for (var i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  var maxDigitCount = mostDigits(nums);
  for (var i = 0; i < maxDigitCount; i++) {
    var digitBuckets = Array.from({ length: 10 }, () => []);
    for (var j = 0; j < nums.length; j++) {
      var digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```
