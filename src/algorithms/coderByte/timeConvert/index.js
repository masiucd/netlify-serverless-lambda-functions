/* eslint-disable prefer-const */
/**
 *
 * @param {number} num
 * @returns {string}
 */
function TimeConvert(num) {
  let hours = Math.floor(num / 60);
  let min = num % 60;

  return `${hours}:${min}`;
}

// keep this function call here
console.log(TimeConvert(126)); // 2:6
console.log(TimeConvert(45)); // 0:45
