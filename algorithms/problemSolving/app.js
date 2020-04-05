/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/**
 *
 * @param {number} s1
 * @param {number} s2
 * @returns {boolean}
 */
function sameFrequency(s1, s2) {
  const numStr1 = s1.toString();
  const numStr2 = s2.toString();
  if (numStr1.length !== numStr2.length) return false;
  const map = {};
  for (const val of numStr1) {
    map[val] = (map[val] || 0) + 1;
  }
  for (const val of numStr2) {
    if (!map[val]) return false;
    map[val] -= 1;
  }
  return true;
}

// console.log(sameFrequency(182, 281)); //  true
// console.log(sameFrequency(34, 14)); // fasle
// console.log(sameFrequency(182, 8211)); // fasle

/**
 *
 * @param {number[] | string[]} args
 * @returns {boolean}
 */
function areThereDuplicates(...args) {
  const map = args.reduce((obj, val) => {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
    return obj;
  }, {});

  for (let key in map) {
    if (map[key] > 1) return true;
  }
  return false;
}

// console.log(areThereDuplicates(1, 2, 3)); // fasle
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'b')); // true

/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns {number}
 */

function maxSubarraySumX(arr, num) {
  if (num > arr.length) return 0;

  let max = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
}

/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns {number}
 */
function maxSubarraySum(arr, num) {
  if (arr.length < num) return 0;
  let leftHand = 0;
  let maxCurrentSum = 0;
  for (let i = 0; i < num; i++) {
    maxCurrentSum += arr[i];
  }
  leftHand = maxCurrentSum;
  for (let i = num; i < arr.length; i++) {
    // Here comes the sliding window
    leftHand = leftHand - arr[i - num] + arr[i];
    if (leftHand > maxCurrentSum) {
      maxCurrentSum = leftHand;
    }
  }

  return maxCurrentSum;
}

// console.log(maxSubarraySum([200, 300, 100, 500], 2));
// console.log(maxSubarraySum([100, 200, 300, 400], 2));

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const sumZero = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// console.log(sumZero([-2, -1, 0, 1, 2, 3]));

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}
// console.log(sumZero2([-2, -1, 0, 1, 2, 3]));

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let leftHand = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[leftHand] !== arr[i]) {
      leftHand += 1;
      arr[leftHand] = arr[i];
    }
  }
  return leftHand + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));

/**
 *
 * @param {number[]} grades
 */
function sumGrades(grades) {
  let sum = 0;
  grades.forEach(grade => (sum += grade));
  return sum;
}

/**
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {
  let numsArr = [];
  let sum = 0;
  numbers.forEach(num => {
    if (num > 0) {
      numsArr.push(num);
    }
  });

  numsArr.forEach(n => (sum += n));

  return sum;
}

// console.log(sumPositiveNumbers([15, -5, 10]));

/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
  let sum = 0;

  numbers.forEach(num => {
    if (num % 2 !== 0 && num > 0) {
      sum += num;
    }
  });
  return sum;
}

// sample usage
// console.log(sumOddNumbers([15, -5, 10]));

/**
 * @param {string[]} cities
 */
const containsAmsterdam = cities => cities.includes('Amsterdam');

// console.log(containsAmsterdam(["Brussels", "Amsterdam", "Oslo"]));

/**
 *
 * @param {string[]} people
 */
const getNamesString = people => people.join(',');

// sample usage
// console.log(getNamesString(['John', 'Jennifer', 'Liham']));

/**
 *
 * @param {number[]} nums
 */
const getAbsSum = nums => nums.map(x => Math.abs(x)).reduce((a, b) => a + b, 0);

let x = getAbsSum([2, -1, 4, 8, 10]); // 25
console.log(x);
