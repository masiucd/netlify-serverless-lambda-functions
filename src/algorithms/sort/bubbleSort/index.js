/**
 * @param {number[]} arr
 * @return {number[]}
 */

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i -= 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const leftHand = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = leftHand;
      }
    }
  }
  return arr;
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function bubbleSort2(arr) {
  const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function bubbleSort3(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i -= 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const leftHand = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = leftHand;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort3([9, -2, 99, 5, 4, 1, 2, -7, 0]));
