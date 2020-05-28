/* eslint-disable prefer-const */
const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i += 1) {
    let j = i - 1;
    let temp = arr[i];
    // console.log('J ', j, 'temp ', temp, 'arr[j]', arr[j]);
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

const nums = [6, 3, 99, 1, 2];

console.log(insertionSort(nums));
