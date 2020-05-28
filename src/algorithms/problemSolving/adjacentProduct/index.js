/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} numbers
 * @returns {number}
 */
const adjacentProduct = numbers => {
  // let res;
  // const arr = numbers.filter(x => x > 0);
  // for (let i = 0; i < arr.length - 1; i++) {
  //   res = Math.max(arr[i] * arr[i + 1]);
  // }
  // return res;
  let res = 0;
  let i = 0;
  let max = 0;
  let j = 1;
  while (i < numbers.length) {
    res = numbers[i] * numbers[j];
    if (max < res) {
      max = res;
    }

    i += 1;
    j += 1;
  }
  return max;
};

console.log(adjacentProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23])); // 30
console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10])); // 80
