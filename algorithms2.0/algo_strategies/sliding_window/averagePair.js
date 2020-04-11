/**
 *
 * @param {number[]} arr
 * @param {number} n
 */
const averagePair = (arr, n) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const avg = (arr[i] + arr[j]) / 2;
    if (avg === n) return true;
    if (avg < n) i++;
    else j--;
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
