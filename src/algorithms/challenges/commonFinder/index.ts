/* eslint-disable prefer-const */
// GIVEN 2 arrays create a function that let's a user know (true/false )
// if the array contains any common values
// arr1 = ['a','b','c','d']
// arr1 = ['p','k','u','t']
// false

// arr1 = ['a','b','c','d']
// arr1 = ['k','u','d']
// true

const commonFinder1 = (arr1: string[], arr2: string[]): boolean => {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
      }
    }
  }

  return count > 0;
};

// console.log(commonFinder1(['a', 'b', 'c'], ['g', 'h', 'o']));
// console.log(commonFinder1(['a', 'b', 'c'], ['g', 'h', 'a']));

const commonFinder2 = (arr1: string[], arr2: string[]): boolean => {
  let map = {};

  for (let val of arr1) {
    map[val] ? (map[val] += 1) : (map[val] = 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]] > 0) return true;
  }
  return false;
};
const commonFinder3 = (arr1: string[], arr2: string[]): boolean => {
  let map = arr1.reduce((obj: any, val: any) => {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
    return obj;
  }, {});

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]] > 0) return true;
  }

  return false;
};

const commonFinder4 = (arr1: string[], arr2: string[]): boolean =>
  arr1.some(item => arr2.includes(item));

console.log(commonFinder4(['a', 'b', 'c'], ['g', 'h', 'o']));
console.log(commonFinder4(['a', 'b', 'c'], ['g', 'h', 'a']));
