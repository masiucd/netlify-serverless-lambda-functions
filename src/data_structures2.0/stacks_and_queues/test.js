/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  const xss = s.split(' ').map(x =>
    [x].map(x =>
      x
        .split('')
        .reverse()
        .join('')
    )
  );

  const flat = [].concat(...xss);

  return flat.join(' ');
};

const sen = "Let's take LeetCode contest";

console.log(reverseWords(sen));
