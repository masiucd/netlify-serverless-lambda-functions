/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
const magnitude = arr => {
  if (arr.length === 0) return 0;
  return Math.sqrt(arr.map(x => x ** 2).reduce((a, b) => a + b));
};

console.log(magnitude([3, 4])); //
console.log(magnitude([0, 0, -10])); //
console.log(magnitude([2, 3, 6, 1, 8])); //
