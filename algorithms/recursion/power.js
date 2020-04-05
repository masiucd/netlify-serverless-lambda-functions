/**
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 */

const power = (n1, n2) => {
  if (n2 === 0) return 1;
  return n1 * power(n1, n2 - 1);
};

console.log(power(5, 2)); // 25
