/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const dobleEven = arr => arr.map((x, i) => (i % 2 !== 0 ? x * 2 : x));
console.log(dobleEven([1, 2, 3, 4, 5, 6]));
console.log(dobleEven([1, 2, 3]));
