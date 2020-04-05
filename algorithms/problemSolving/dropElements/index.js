/**
 *
 * @param {number[]} arr
 * @param {function} func
 * @returns {number[]}
 */
function dropElements(arr, func) {
  // const res = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (func(arr[i])) {
  //     res.push(arr[i]);
  //   }
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   if (func(arr[0])) {
  //     break;
  //   } else if (!func(arr[arr.length - 1])) {
  //     return [];
  //   } else {
  //     arr.shift();
  //   }
  // }
  // return arr;

  // return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);

  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

const p = dropElements([1, 2, 3], function(n) {
  return n < 3;
});
const c = dropElements([0, 1, 0, 1], function(n) {
  return n === 1;
}); // [1,0,1]

const b = dropElements([1, 2, 3, 9, 2], function(n) {
  return n > 2;
});

console.log(b);
