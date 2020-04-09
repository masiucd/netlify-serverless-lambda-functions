/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// NAIVE APPROACH
function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    console.log(correctIndex);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 0);
  }

  return true;
}

// console.log(same([1, 2, 3, 1], [9, 1, 4, 4]));

function same2(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1: any = {};
  const frequencyCounter2: any = {};
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (const key in frequencyCounter1) {
    // @ts-ignore
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // @ts-ignore
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3, 1], [9, 1, 4, 4]));
