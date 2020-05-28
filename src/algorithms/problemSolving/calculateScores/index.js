/**
 *
 * @param {string} str
 * @returns {number[]}
 */
function calculateScores(str) {
  let a = 0;
  let b = 0;
  let c = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') a += 1;
    if (str[i] === 'B') b += 1;
    if (str[i] === 'C') c += 1;
  }
  return [a, b, c];
}

// console.log(calculateScores('A'))
// console.log(calculateScores('ABC'))
console.log(calculateScores('ABCBACC'));

// calculateScores("A") ➞ [1, 0, 0]

// calculateScores("ABC") ➞ [1, 1, 1]

// calculateScores("ABCBACC") ➞ [2, 2, 3]
