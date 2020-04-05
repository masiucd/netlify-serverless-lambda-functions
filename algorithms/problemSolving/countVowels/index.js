/**
 *
 * @param {string} str
 * @returns {number}
 */
const countVowels = str =>
  str
    .split('')
    .map(x => x.match(/[aeiouy]/gi))
    .filter(x => x !== null).length;

// console.log(countVowels('marcell'));

/**
 *
 * @param {string} str
 * @returns {number}
 */
const countVowels2 = str => {
  let c = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[aeiouy]/gi)) {
      c += 1;
    }
  }
  return c;
};

console.log(countVowels2('marcell'));
