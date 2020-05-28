/* eslint-disable no-nested-ternary */
/**
 *
 * @param  {number[] | null} rest
 */
function addTogether(...rest) {
  const [a, b] = rest;
  return rest.some(n => typeof n !== 'number')
    ? undefined
    : rest.length > 1
    ? rest.reduce((a, b) => a + b, 0)
    : n => (typeof n === 'number' ? n + a : undefined);
}

const a = addTogether(2, 3);
// console.log(a);

const arr = [1, 2, 3, 4, 5];

console.log(arr.some(x => x === 5));
