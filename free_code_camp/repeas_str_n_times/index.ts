function repeatStringNumTimes(str: string, num: number) {
  if (num < 0) return '';
  const arr = Array(num).fill(str);
  return arr.join('');
}

const x = repeatStringNumTimes('abc', 3);
console.log(x);
