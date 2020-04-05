/**
 * @param {number[]} arr
 * @return {number[]}
 */

const collectOdds = arr => {
  const res = [];
  /**
   * @param {number[]} input
   * @return {number[]}
   */
  const helper = input => {
    if (input.length === 0) {
      return;
    }
    if (input[0] % 2 !== 0) {
      res.push(input[0]);
    }
    helper(input.slice(1));
  };

  helper(arr);
  return res;
};

// console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * @param {number[]} arr
 * @return {number[]}
 */

const collectOddsPure = arr => {
  let res = [];
  if (arr.length === 0) return arr;

  if (arr[0] % 2 !== 0) {
    res.push(arr[0]);
  }
  res = res.concat(collectOddsPure(arr.slice(1)));

  return res;
};

console.log(collectOddsPure([1, 2, 3, 4, 5]));
