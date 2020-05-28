/**
 * @param {number} num
 * @return {number}
 */

const sumRange = num => {
  if (num === 1) return 1;
  console.log(num);
  return num + sumRange(num - 1);
};

const print = sumRange(4);
const print2 = sumRange(3);

console.log(print);
// console.log(print2);
