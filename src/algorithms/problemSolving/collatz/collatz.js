/**
 *
 * @param {number} n
 * @returns {number[]}
 */
const collatz = n => {
  const res = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) res.push(i * 3 + 1);
    if (i % 2 === 0) res.push(i / 2);
  }

  return res;
};
// [10, 5, 16, 8, 4, 2, 1]
// [1, 10, 2, 19, 3, 4, 28, 5];
console.log(collatz(10));
