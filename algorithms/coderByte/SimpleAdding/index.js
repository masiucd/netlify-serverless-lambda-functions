/**
 *
 * @param {number} num
 * @returns {number}
 */
function SimpleAdding(num) {
  const nums = [];
  for (let i = 1; i <= num; i += 1) {
    nums.push(i);
  }

  return nums.reduce((a, b) => a + b, 0);
}

/**
 *
 * @param {number} num
 * @returns {number}
 */
function SimpleAddingRec(num) {
  if (num === 1) {
    return 1;
  }

  return num + SimpleAddingRec(num - 1);
}

console.log(SimpleAdding(4)); // 1 + 2 + 3 + 4 = 10.
console.log(SimpleAdding(12)); // 78
