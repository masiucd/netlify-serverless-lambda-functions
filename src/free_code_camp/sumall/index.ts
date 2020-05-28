function sumAll(arr: number[]): number {
  const [a, b] = arr.sort((a, b) => a - b);
  const res = [];
  for (let i = a; i <= b; i++) {
    res.push(i);
  }

  return res.reduce((a, b) => a + b, 0);
}

const x = sumAll([1, 4]);
console.log(x);
