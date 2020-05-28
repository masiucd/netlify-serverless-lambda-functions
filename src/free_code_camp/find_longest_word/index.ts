function findLongestWordLength(str: string) {
  const arr = str
    .split(' ')
    .map(x => x.length)
    .sort((a, b) => a - b);

  return arr[arr.length - 1];
}

const x = findLongestWordLength('The quick brown fox jumped over the lazy dog');

console.log(x);
