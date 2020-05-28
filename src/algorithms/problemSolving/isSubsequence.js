/* eslint-disable prefer-const */
const isSubsequence = (s1, s2) => {
  let i = 0;
  let j = 0;
  if (!s1) return false;
  while (j < s2.length) {
    if (s2[j] === s1[i]) i += 1;
    if (i === s1.length) return true;
    j += 1;
  }
  return false;
};
const isSubsequence2 = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1));
  return isSubsequence2(str1, str2.slice(1));
};

console.log(isSubsequence2('Hello', 'Hello WoRlD'));
console.log(isSubsequence2('sassba', 'abc')); // fasle ORDER MATTERS
console.log(isSubsequence2('abc', 'abracadabra'));
