/* eslint-disable prefer-const */
const binarySearch = (numbers: number[], target: number): number => {
  let start = 0;
  let end = numbers.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (numbers[middle] !== target && start < end) {
    if (target > numbers[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return numbers[middle] === target ? middle : -1;
};

const arr = [5, 7, 9, 10, 12, 17, 28, 34, 78, 1101];

console.log(binarySearch(arr, 17));
console.log(binarySearch(arr, 21));
