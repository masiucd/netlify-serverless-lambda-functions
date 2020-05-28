/**
 *
 * @param {number} num
 * @param {number} length
 * @returns {number[]}
 */
function arrayOfMultiples(num, length) {
  const endLength = num * length;
  const arr = [];

  for (let i = num; i <= endLength; i += num) {
    arr.push(i);
  }

  return arr;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
