/* eslint-disable prefer-const */
/**
 *
 * @param {string} sen
 * @returns {string}
 */
function LongestWord(sen) {
  const rgx = /\W/g;
  sen = sen.replace(rgx, ' ');
  const strArr = sen.split(' ');

  let longest = '';
  let max = 0;
  for (let i = 0; i < strArr.length; i++) {
    // console.log(strArr[i]);
    if (max < strArr[i].length) {
      max = strArr[i].length;
      longest = strArr[i];
    }
  }
  return longest;
}

console.log(LongestWord('I love dogs')); // love
console.log(LongestWord('fun&!! time')); // time
