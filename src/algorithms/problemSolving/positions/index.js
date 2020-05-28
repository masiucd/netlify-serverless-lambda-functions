/**
 *
 * @param {number[]} xs
 * @param {number} x
 */
const positions = (x, xs) => {
  const pos = [];
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] === x) {
      pos.push(i);
    }
  }
  return pos;
};

console.log(positions(1, [1, 2, 3, 1, 2, 3, 1]));
