/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */
const sumOfPairs = (arr, target) => {
  // let i = 0;
  // const res = [];
  // while (i < arr.length) {
  //   if (arr[i] + arr[i + 1] === target) {
  //     res.push(arr[i], arr[i + 1]);
  //   }
  //   i += 1;
  // }
  // return res;
  const seenMap = {};
  for (let i = 0; i < arr.length; i++) {
    console.log(seenMap.hasOwnProperty(target - arr[i]));
    if (seenMap.hasOwnProperty(target - arr[i])) {
      return [target - arr[i], arr[i]];
    }
    seenMap[arr[i]] = true;
  }
  return undefined;
};

// console.log(sumOfPairs([11, 3, 7, 5], 10));
// console.log(sumOfPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumOfPairs([4, 3, 2, 3, 4], 6));
