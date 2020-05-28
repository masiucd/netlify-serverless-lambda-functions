/* eslint-disable no-multi-assign */
const reverseString1 = (str: string): string =>
  str
    .split('')
    .reverse()
    .join('');

const reverseString2 = (str: string): string => {
  let reversed = '';
  for (let char of str) {
    reversed = char += reversed;
  }
  return reversed;
};

const reverseString3 = (str: string): string => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

const reverseString4 = (str: string): string => {
  if (str.length === 0) return '';
  return reverseString4(str.slice(1)) + str[0];
};

// console.log(reverseString1('hello'));
// console.log(reverseString2('hello'));
// console.log(reverseString3('hello'));
console.log(reverseString4('hello'));
