/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns {number}
 */
const maxSubArray = (arr, num) => {
  if (arr.length < num) return 0;
  let max = 0;

  for (let i = 0; i < arr.length - num + 1; i += 1) {
    let temp = 0;
    for (let j = 0; j < num; j += 1) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns {number}
 */
const maxSubArray2 = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i += 1) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i += 1) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

module.exports = {
  maxSubArray,
  maxSubArray2,
};

// console.log(maxSubArray2([1, 2, 3, 4, 3, 2, 2, 1, 2], 3));
// console.log(maxSubArray2([1, 2, 10, 3, 1, 20], 2));
// console.log(maxSubArray2([1, 2, 10, 3, 1, 20], 3));
