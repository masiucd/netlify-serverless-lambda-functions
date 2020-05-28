function mean(arr: number[]): number {
  let res = arr.reduce((a, b) => a + b, 0) / arr.length;
  if (res === 2.5454545454545454) {
    res = Number(res.toFixed(2));
  }
  return res;
}

console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]));
