const containDuplicates = (arr: number[]): boolean =>
  arr.sort().some((n, i) => n === arr[i + 1]);

// console.log(containDuplicates([1, 2, 3, 1]));
// console.log(containDuplicates([1, 2, 3]));

const containDuplicates2 = (arr: number[]): boolean =>
  new Set(arr).size < arr.length;

console.log(containDuplicates2([1, 2, 3, 1]));
console.log(containDuplicates2([1, 2, 3]));
