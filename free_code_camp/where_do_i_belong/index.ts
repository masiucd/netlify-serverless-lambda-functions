/* eslint-disable prefer-const */
// function getIndexToIns(arr: number[], num: number) {
//   const sorted = arr.sort((a, b) => a - b);

//   for (let i = 0; i < sorted.length; i++) {
//     if (arr[i] >= num) return i;
//   }
//   return arr.length;
// }
function getIndexToIns(arr: number[], num: number) {
  arr.push(num);
  const sorted = arr.sort((a, b) => a - b);
  return sorted.indexOf(num);
}
// const x = getIndexToIns([40, 60], 50); // 1
const xs = getIndexToIns([10, 20, 30, 40, 50], 35); // 3
// const xss = getIndexToIns([10, 20, 30, 40, 50], 20); // 1
console.log(xs);
