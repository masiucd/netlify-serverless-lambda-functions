/* eslint-disable prefer-const */
const uniqueValues = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(arr);
  return i + 1;
};

const xs = [1, 1, 1, 1, 1, 1, 1, 2]; // 2
const xss = [1, 1, 2, 3, 4, 4, 4, 5]; // 2
