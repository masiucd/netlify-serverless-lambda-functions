/**
 *
 * @param {string} string
 * @returns {number}
 */
const countLowers = string => {
  let counter = 0;

  const xs = string.split('').filter(x => x === x.toLowerCase());
  for (let i = 0; i < xs.length; i++) {
    counter += 1;
  }
  return counter;
};

/**
 *
 * @param {string} string
 * @returns {number}
 */
const countLowers2 = string =>
  string.split('').filter(x => x === x.toLowerCase()).length;

console.log(countLowers2('Hello'));
