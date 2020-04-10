/* eslint-disable prefer-const */
// Naive solution
function maxSubArray(numbers: number[], k: number) {
  if (numbers.length === 0) return null;
  let max = -Infinity;
  for (let i = 0; i < numbers.length - k + 1; i++) {
    // prevent for looping more then it needs
    let temp = 0;
    for (let j = 0; j < k; j++) {
      temp += numbers[i + j];
    }
    if (max < temp) {
      max = temp;
    }
  }
  return max;
}

function maxSubArray2(numbers: number[], k: number) {
  if (numbers.length === 0) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += numbers[i];
  }
  tempSum = maxSum;
  for (let i = k; i < numbers.length; i++) {
    tempSum = tempSum - numbers[i - k] + numbers[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
function maxSubArray3(numbers: number[], k: number) {
  if (numbers.length === 0) return null;
  let max = 0;
  let i = 0;
  let j = k;
  let temp = 0;
  while (i < k) {
    max += numbers[i];
    i++;
  }
  temp = max;
  while (j < numbers.length) {
    temp = temp - numbers[j - k] + numbers[j];
    max = Math.max(max, temp);
    j++;
  }
  return max;
}

// console.log(maxSubArray2([1, 3, 0, 2, 10, 2, 11, 2, 3, 4], 2));
