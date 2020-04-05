/* eslint-disable prefer-const */

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const merge = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) return [];
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};

// console.log(merge([1, 3, 6], [9, 3, 2]));

/**
 *
 * @param {number[]} arr
 * @return {number[]}
 */

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

console.log(mergeSort([8, 4, 6, 8, 4, 2, 9, 7, 4, -2, 3, -1]));
