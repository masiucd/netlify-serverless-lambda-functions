/* eslint-disable prefer-const */
// Naive version
function sumZeroX(arr: number[]): number[] | undefined {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
function sumZeroXX(arr: number[]): number[] | undefined {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    if (arr[startIndex] + arr[endIndex] === 0) {
      return [arr[startIndex], arr[endIndex]];
    }
    startIndex += 1;
    endIndex -= 1;
  }
}
function sumZero(arr: number[]): number[] | undefined {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    let sum = arr[startIndex] + arr[endIndex];
    if (sum === 0) {
      return [arr[startIndex], arr[endIndex]];
    }
    if (sum > 0) {
      endIndex -= 1;
    } else {
      startIndex += 1;
    }
  }
}

const n1 = [-3, -2, -1, 0, 1, 2, 3];
const n2 = [-2, -1, 0, 1, 2, 3];
const n3 = [-4, -3, -2, -1, 0, 1, 2, 3, 5];

console.log(sumZero(n3));
