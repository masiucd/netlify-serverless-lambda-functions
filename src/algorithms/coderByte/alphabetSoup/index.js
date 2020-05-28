/**
 *
 * @param {string} str
 * @returns {string}
 */
function AlphabetSoup(str) {
  return str
    .split('')
    .sort()
    .join('');
}

console.log(AlphabetSoup('hooplah')); // ahhloop
