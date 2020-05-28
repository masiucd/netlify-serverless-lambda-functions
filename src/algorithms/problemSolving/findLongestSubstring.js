/* eslint-disable prefer-const */
const findLongestSubstring = str => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }
  return longest;
};

console.log(findLongestSubstring('rithmsschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('bbbbb'));
console.log(findLongestSubstring('longestsubstring'));
