/**
 * @param {number} n
 * @return {number}
 */

const fib = n => {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(10));

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
