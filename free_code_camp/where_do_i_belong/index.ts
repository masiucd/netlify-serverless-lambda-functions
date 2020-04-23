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

export { getIndexToIns };
