/* eslint-disable no-nested-ternary */
/**
 *
 * @param {string} str
 * @returns {string}
 */
function LetterChanges(str) {
  return str
    .split('')
    .map(c =>
      String.fromCharCode(
        c >= 'a' && c <= 'z'
          ? ((c.charCodeAt(0) - 97 + 1) % 26) + 97
          : c >= 'A' && c <= 'Z'
          ? ((c.charCodeAt(0) + 1 - 65) % 26) + 65
          : c.charCodeAt(0)
      )
    )
    .join('')
    .replace(/[aeiou]/g, letters => letters.toUpperCase());
}

console.log(LetterChanges('fun times!')); // gvO Ujnft!
