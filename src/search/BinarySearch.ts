/* eslint-disable prefer-const */
function binarySearch(arr: number[], target: number) {
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

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(binarySearch(items, 3));
function search(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length;
  let counter = 0;
  while (low <= high) {
    counter += 1;
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    if (guess === target) return guess;
    if (guess > target) high = mid - 1;
    else low = mid + 1;
  }
  console.log(counter);
  return -1;
}

// console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 3));

export { binarySearch, search };
