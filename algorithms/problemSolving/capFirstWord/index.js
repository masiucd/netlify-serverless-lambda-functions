/**
 *
 * @param {string} str
 * @returns {string}
 */
const capFirstWord = str =>
  str
    .toLowerCase()
    .split('')[0]
    .toUpperCase() + str.toLowerCase().substring(1);

console.log(capFirstWord('masiu'));
console.log(capFirstWord('BRAVO'));
console.log(capFirstWord('BLanAne'));
// console.log(capFirstWord('alex'));
