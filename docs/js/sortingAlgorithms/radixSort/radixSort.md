# Radix Sort

> Radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their individual digits.

<p align="center"><img src="js/sortingAlgorithms/radixSort/radixSort.png" width="500px" /></p>

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
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```
