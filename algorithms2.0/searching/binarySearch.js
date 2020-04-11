/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 * @param {number} target
 */
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === target ? arr[middle] : -1;
}

console.log(binarySearch([1, 4, 6, 8, 9, 10, 12, 13, 14, 18], 6));
