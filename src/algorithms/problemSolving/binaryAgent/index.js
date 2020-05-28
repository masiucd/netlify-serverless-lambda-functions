/**
 *
 * @param {string} str
 * @returns {string}
 */
function binaryAgent(str) {
  // const strArr = str.split(' ');
  // const uniStr = [];
  // for (let i = 0; i < strArr.length; i += 1) {
  //   uniStr.push(String.fromCharCode(parseInt(strArr[i], 2)));
  // }
  // return uniStr.join('');

  const uniStr = str.split(' ').map(x => String.fromCharCode(parseInt(x, 2)));
  return uniStr.join('');
}

const print = binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);

console.log(print);
