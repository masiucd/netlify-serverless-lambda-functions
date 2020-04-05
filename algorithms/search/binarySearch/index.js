/* eslint-disable prefer-const */

/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

let binarySearch = function(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== target && start < end) {
    if (target > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === target ? middle : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 7));

module.exports = binarySearch;
