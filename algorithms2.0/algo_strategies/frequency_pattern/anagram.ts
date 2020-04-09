const anagram = (str1: string, str2: string): boolean => {
  if (str1.length === 0 && str2.length === 0) return true;
  const map: any = {};

  for (const val of str1) {
    map[val] = (map[val] || 0) + 1;
  }

  for (const char of str2) {
    if (!map[char]) return false;
    map[char] -= 1;
  }

  return true;
};
const anagram2 = (str1: string, str2: string): boolean => {
  // @ts-ignore
  const map = str1.split('').reduce((obj: any, val: any) => {
    // @ts-ignore
    if (obj[val]) {
      // @ts-ignore
      obj[val] += 1;
    } else {
      // @ts-ignore
      obj[val] = 1;
    }
    return obj;
  }, {});

  for (const char of str2) {
    if (!map[char]) return false; // if we can't find any letter in the other string then return false
    // console.log(map);
    map[char] -= 1;
  }
  return true;
};

// console.log(anagram('', ''));
// console.log(anagram2('zza', 'aaz')); // false
console.log(anagram2('legia', 'aelig')); // true
