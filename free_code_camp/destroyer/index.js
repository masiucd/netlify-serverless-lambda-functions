/**
 *
 * @param {number[]} arr
 */
function destroyer(arr, ...args) {
  const xs = [...arr, ...args].filter(x => !args.includes(x));
  return xs;
}

const x = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(x);
