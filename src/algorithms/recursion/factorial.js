/**
 * @param {number} n
 * @return {number}
 */

const factorial = n => {
  if (n <= 1) return n;
  return n * factorial(n - 1);
};

// console.log(factorial(5)); // 120

// Without recursion!!
const f = n => {
  let temp = 1;
  for (let i = n; i > 0; i -= 1) {
    temp *= i;
  }
  return temp;
};
