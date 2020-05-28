/* eslint-disable prefer-const */
const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const nums: number[] = [6, 88, 1000, 2, -1, 100];
// const nums: number[] = [6, 88, -1, 100];

console.log(bubbleSort(nums));
