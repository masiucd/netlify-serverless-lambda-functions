/**
 *
 * @param {string} str
 * @returns {number}
 */
function lengthFn(str) {
  // let c = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i]) c += 1;
  // }
  // return c;
  if (str.length > 0) {
    return 1 + lengthFn(str.substring(1));
  }
}

console.log(lengthFn('hello')); // 5
