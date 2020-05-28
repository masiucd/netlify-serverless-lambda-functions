/**
 * @param {number} n
 * @returns {number}
 */
function fizzBuzz(n) {
  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

const fizzBuzz2 = n => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};

module.exports = fizzBuzz;
