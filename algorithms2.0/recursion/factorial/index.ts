const factorial = (n: number): number => {
  if (n <= 0) return 1;
  // console.log(n);
  console.log(n * factorial(n - 1));
  return n * factorial(n - 1);
};

console.log(factorial(5));
