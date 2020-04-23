/* eslint-disable prefer-const */
function frankenSplice(arr1: any[], arr2: any[], n: number) {
  let copiedArr2 = [...arr2];
  let num = n;
  for (let i = 0; i < arr1.length; i++) {
    copiedArr2.splice(num, 0, arr1[i]);
    num += 1;
  }
  return copiedArr2;
}

const x = frankenSplice([1, 2, 3], [4, 5, 6], 1);
// console.log(x);
// [4, 1, 2, 3, 5].

function frankenSplice2(arr1: any[], arr2: any[], n: number) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

const x2 = frankenSplice2([1, 2, 3], [4, 5, 6], 1);
console.log(x2);
