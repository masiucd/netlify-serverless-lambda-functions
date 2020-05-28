/* eslint-disable prefer-const */
const longestWord = str => {
  let words = str.split(' ');
  let maxWord = 0;
  let word = '';
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > maxWord) {
      maxWord = words[i].length;
      word = words[i];
    }
  }
  console.log(word);
  return maxWord;
};

const print = longestWord('Hello there Marcell How are you today?');

console.log(print);
