function hasPairsum(arr: number[], sum: number): boolean {
  const set = new Set();
  const { length } = arr;

  for (let i = 0; i < length; i++) {
    if (set.has(arr[i])) {
      return true;
    }
    set.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairsum([1, 2, 3, 4, 5], 3));
console.log(hasPairsum([1, 2, 3, 4, 5], 33));
