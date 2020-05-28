/**
 *
 * @param {number} n
 * @returns {boolean}
 */
const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
  // return n;
};

/**
 *
 * @param {number} num
 * @returns {number}
 */
function sumPrimes(num) {
  const primes = [];

  for (let i = 0; i <= num; i += 1) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.reduce((acc, cur) => acc + cur, 0);

  // console.log(Array.from(Array(10).keys()));
  // const data = [...Array(num).keys()]

  // console.log(data);
}

// const x = sumPrimes(10);
const x = sumPrimes(977); // 73156

console.log(x);
