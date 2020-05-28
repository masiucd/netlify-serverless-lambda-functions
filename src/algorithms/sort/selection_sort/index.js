/**
 *
 * @param {number[]} arr
 * @param {number} index1 number
 * @param {*} index2
 */
const swap = (arr, index1, index2) =>
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      // let leftHand = arr[i];
      // arr[i] = arr[lowest];
      // arr[lowest] = leftHand;
      swap(arr, i, lowest);
    }
  }
  return arr;
};

console.log(selectionSort([7, 3, 5, 10, -2, -1, 1]));
