function linearSearch(array, target) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === target) return i;
  }
  return -1;
}
const arr = [6, 4, 8, 3, -2, 1, 2, 3, 4];
console.log(linearSearch(arr, 8));
