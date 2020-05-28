/**
 *
 * @param {number [] | number [][] | number [][][] } arr
 * @returns {number[] | null }
 */
function steamrollArray(arr) {
  // if (arr !== Array) return null;

  return arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? steamrollArray(cur) : cur),
    []
  );
}

const x = steamrollArray([1, [2], [3, [[4]]]]);
// const y = steamrollArray('test');

console.log(x);
