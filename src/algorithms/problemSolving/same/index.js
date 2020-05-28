/* eslint-disable no-restricted-syntax */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const frequencyObj1 = {};
  const frequencyObj2 = {};

  for (const num of arr1) {
    frequencyObj1[num] = (frequencyObj1[num] || 0) + 1;
  }
  for (const num of arr2) {
    frequencyObj2[num] = (frequencyObj2[num] || 0) + 1;
  }

  for (const key in frequencyObj1) {
    if (!(key ** 2 in frequencyObj2)) return false;
    if (frequencyObj1[key ** 2] !== frequencyObj2[key]) return false;
  }
  return true;
};

// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i += 1) {
//     const correctIdx = arr2.indexOf(arr1[i] ** 2);
//     if (correctIdx === -1) {
//       return false;
//     }
//     arr2.splice(correctIdx, 1);
//   }
//   return true;
// };

// console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same([1, 2, 3, 2, 2], [9, 1, 4, 4]));
