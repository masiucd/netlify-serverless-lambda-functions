/* eslint-disable prefer-const */
const isAverage = (arr, target) => {
  if (arr.length === 0) return false;

  const arraySum = arr.sort((a, b) => a - b).reduce((a, b) => a + b, 0);
  const res = arraySum / arr.length;
  return Math.ceil(res) === target;
};

console.log(isAverage([1, 2, 3], 2.5));
console.log(isAverage([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(isAverage([-1, 0, 3, 4, 5, 6], 4.1));
console.log(isAverage([], 4));
