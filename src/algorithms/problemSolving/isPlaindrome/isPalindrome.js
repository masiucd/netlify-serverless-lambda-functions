const isPalindrome = str => {
  const input = str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

  return input === str.toLowerCase();
};

const print1 = isPalindrome('racecar');
const print2 = isPalindrome('apa');
const print3 = isPalindrome('monkey');

console.log(print1);
console.log(print2);
console.log(print3);

// module.exports = {
//   isPalindrome,
// };

module.exports = {
  isPalindrome,
};
