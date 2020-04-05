const reverseIntList = (n: number): number =>
  Number(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  );

console.log(reverseIntList(94571233));
