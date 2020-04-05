const removeSmallest = (arr: number[]): number[] =>
  arr.sort().filter((x, i) => i !== 0);

// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([5, 3, 2, 1, 4]));
// console.log(removeSmallest([3, 6, 7, 3, 7, 6]));
// removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]

const removeSmallest2 = (arr: number[]): number[] => {
  const smallest = arr.sort()[0];
  return arr.filter(x => x !== smallest);
};

console.log(removeSmallest2([1, 2, 3, 4, 5]));
