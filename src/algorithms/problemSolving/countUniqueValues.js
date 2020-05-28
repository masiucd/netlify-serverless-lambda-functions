/* eslint-disable prefer-const */
/**
 * @param {number[]} arr
 * @returns {number}
 */
const countUniqueValues = arr => {
  if (arr.length === 0) return 0;
  let leftHand = 0;

  for (let rightHand = 1; rightHand < arr.length; rightHand += 1) {
    if (arr[leftHand] !== arr[rightHand]) {
      leftHand += 1;
      arr[rightHand] = arr[leftHand];
    }
  }
  return leftHand + 1;
};

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 2]));
