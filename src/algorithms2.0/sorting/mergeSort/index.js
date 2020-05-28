/* eslint-disable prefer-const */
const numbersArray = [7, 6, 9, 2, 5, 3, 1, 0, 99, -2, 12, -33];

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 */
function merge(left, right) {
  let res = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      res.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 *
 * @param {number[]} numbers
 */
const mergeSort = numbers => {
  if (numbers.length <= 1) return numbers;
  let middle = Math.floor(numbers.length / 2);

  let left = numbers.slice(0, middle);
  let right = numbers.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(numbersArray));
// console.log(merge([7, 5, 4, 2], [2, 1, 9, -1]));
