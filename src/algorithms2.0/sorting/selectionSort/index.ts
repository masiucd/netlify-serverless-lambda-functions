/* eslint-disable prefer-const */
const selectionSort = (numbers: number[]): number[] => {
  // find the smallest item
  for (let i = 0; i < numbers.length; i++) {
    let min = i;
    let temp = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    numbers[i] = numbers[min];
    numbers[min] = temp;
  }
  return numbers;
};

let arr = [9, 6, 2, 7, 1];
console.log(selectionSort(arr));
