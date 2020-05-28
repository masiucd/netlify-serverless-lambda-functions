/* eslint-disable prefer-const */
const minSubArrayLen = (arr, num) => {
  let total = 0;
  for (let i = 0; i <= num; i += 1) {
    console.log((total += arr[i]));
  }
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
// console.log(minSubArrayLen([1, 2, 3, 4, 5, 6, 7], 4));
// console.log(minSubArrayLen([1, 2, 2, 2, 9, 6, 1], 3));
// console.log(minSubArrayLen([19, 2, 13, 4, 12, 6, 7], 8));
