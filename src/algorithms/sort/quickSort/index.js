/**
 *
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start; i < arr.length; i += 1) {
    if (pivot > arr[i]) {
      swapIndex += 1;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);

  return swapIndex;
};

// console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]));

/**
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, -65, 3]));
