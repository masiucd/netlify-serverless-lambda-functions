/**
 *
 * @param {string} str
 * @param {number} n
 */
const repeatString = (str, n) => {
  if (n < 0) return str;
  return str.repeat(n);
};
/**
 *
 * @param {string} str
 * @param {number} n
 */
const repeatString2 = (str, n) => {
  const res = [];
  for (let i = 0; i < n; i += 1) {
    res.push(str);
  }

  return res.join(' ');
};
/**
 *
 * @param {string} str
 * @param {number} n
 */
const repeatString3 = (str, n) =>
  Array.from({ length: n }, () => str).join(' ');
