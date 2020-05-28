/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

const isOdd = arr => arr.filter(x => x % 2 !== 0);

/**
 *
 * @param {number[]} arr
 * @returns {boolean}
 */

const someRecursive = (arr, cb) => {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
};

console.log(someRecursive([1, 2, 3, 4, 5, 6], val => val > 10));

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
