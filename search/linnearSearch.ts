function linearSearch(arr: number[], target: number): number {
  for (const [i, val] of arr.entries()) {
    if (target === val) return i;
  }
  return -1;
}

// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 2));

export { linearSearch };
