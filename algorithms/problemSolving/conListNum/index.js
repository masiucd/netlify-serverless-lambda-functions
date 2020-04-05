/**
 *
 * @param {number} n
 * @returns {number}
 */
const conListNum = n => {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  return arr.reduce((a, b) => a + b, 0);
};

console.log(conListNum(7));
