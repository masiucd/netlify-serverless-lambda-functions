/**
 * @param {number} n
 * @return {number}
 */

const recursiveRange = n => {
  if (n < 1) return n;
  return n + recursiveRange(n - 1);
};

// recursiveRange(6) // 21
// recursiveRange(10) // 55
