// @ts-nocheck
/* eslint-disable no-restricted-syntax */
const countChar = string => {
  const input = string.toLowerCase();
  const charMap = {};
  let charStr = '';
  let charCount = 0;
  for (const str of input) {
    if (charMap[str]) {
      charMap[str] += 1;
    } else {
      charMap[str] = 1;
    }
  }
  for (const str in charMap) {
    if (charMap[str] > charCount) {
      charCount = charMap[str];
      charStr = str;
    }
  }

  return charStr;
};

const print = countChar('hello Marcell');
console.log(print);
