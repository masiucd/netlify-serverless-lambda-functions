/* eslint-disable prefer-const */
const factorialIterate = (n: number) => {
  let res = 1;
  if (n < 2) {
    res = 2;
  }
  for (let i = 2; i <= n; i++) {
    console.log(res);
    res *= i;
  }
  return res;
};

const factorial = (n: number): number => {
  if (n <= 0) return 1;
  // console.log(n);
  console.log(n * factorial(n - 1));
  return n * factorial(n - 1);
};

console.log(factorialIterate(5));
