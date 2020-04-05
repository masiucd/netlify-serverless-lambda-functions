/* eslint-disable prefer-const */
const maxSubarraySum = (arr, num) => {
  if (arr.length < num) return null;
  let total = 0;
  for (let i = 0; i < num; i += 1) {
    total += arr[i];
  }
  let acc = total;
  for (let i = num; i < arr.length; i += 1) {
    acc += arr[i] - arr[i - num];
    total = Math.max(total, acc);
  }
  return total;
};

console.log(maxSubarraySum([100, 200, 300, 400, 500], 2));
console.log(maxSubarraySum([100, 200, 300, 400, 500], 3));
console.log(maxSubarraySum([100, 200, 300, 400, 500], 4));
