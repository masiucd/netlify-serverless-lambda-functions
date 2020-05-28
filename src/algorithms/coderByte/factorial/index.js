/**
 *
 * @param {number} num
 * @returns {number}
 */
function FirstFactorial(num) {
  if (num < 2) return num;

  return num * FirstFactorial(num - 1);
}

console.log(FirstFactorial(5));
