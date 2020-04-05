/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let x = max;

  for (let i = max - 1; i >= min; i--) {
    if (x % i) {
      x += max;
      i = max;
    }
  }
  return x;
}

const x = smallestCommons([1, 5]);

console.log(x);
