/* eslint-disable prefer-const */
/**
 *
 * @param {string} sentence
 * @return {boolean}
 */
const smoothSentenceX = sentence => {
  let wordList = sentence.split(' ');
  // console.log(wordList);
  let firsttWordList = [];
  let lastWordList = [];
  for (let i = 0; i < wordList.length; i++) {
    firsttWordList.push(wordList[i][0]);
    lastWordList.push(wordList[i][wordList[i].length - 1]);
  }

  // firsttWordList.pop();
  firsttWordList.shift();
  lastWordList.pop();
  let c = 0;
  for (let i = 0; i < firsttWordList.length; i++) {
    if (firsttWordList[i] === lastWordList[i]) {
      c += 1;
    }
  }
  return c === firsttWordList.length;
};

/**
 *
 * @param {string} sen
 */
const smoothSentence = sen => {
  let strArr = sen.split(' ');
  let first = strArr.map((x, i) => x[0]);
  let last = strArr.map((x, i) => x[x.length - 1]);
  let c = 0;
  first.forEach((x, i) => {
    if (x === first[i]) {
      c += 1;
    }
  });
  return c === last.length;
  // console.log(first, last);
};
// console.log(smoothSentence('Someone is outside the doorway')); // false
console.log(smoothSentence('She eats super righteously')); // true

/**
 * isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

isSmooth("Someone is outside the doorway") ➞ false

isSmooth("She eats super righteously") ➞ true
 */
