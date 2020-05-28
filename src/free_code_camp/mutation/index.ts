// function mutation(arr: string[]) {
//   const xs = arr.map(x => x.toLowerCase());
//   const [first, last] = xs;
//   for (let i = 0; i < last.length; i++) {
//     if (first.indexOf(last[i]) < 0) return false;
//   }
//   return true;
// }

function mutation(arr: string[]) {
  const xs = arr.map(x => x.toLowerCase());
  const [first, last] = xs;
  return last.split('').every(word => first.indexOf(word) !== -1);
}
const x = mutation(['hello', 'hey']); // false
const xs = mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']); // true
console.log(xs);
