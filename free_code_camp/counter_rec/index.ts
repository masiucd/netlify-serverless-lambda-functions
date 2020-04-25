function countdown(n: number): any {
  if (n < 1) {
    return [];
  }
  const xs: any = countdown(n - 1);
  xs.unshift(n);
  return xs;
}

// console.log(countdown(10));

function rangeOfNumbers(startNum: number, endNum: number) {
  // const res = [];
  // for (let i = startNum; i <= endNum; i++) {
  //   res.push(i);
  // }
  // return res;

  if (endNum === startNum - 1) return [];
  const xs: any = rangeOfNumbers(startNum, endNum - 1);
  xs.push(endNum);
  return xs;
}

console.log(rangeOfNumbers(6, 9));
