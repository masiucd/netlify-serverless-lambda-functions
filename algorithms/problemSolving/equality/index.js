/**
 *
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
function checkEquality(a, b) {
  return a === b;
}

console.log(checkEquality('a', false));
console.log(checkEquality('a', 'a'));
console.log(checkEquality(1, '1'));
console.log(checkEquality([], {}));
console.log(checkEquality(NaN, NaN));

// you have to test not only the type with typeof, but also the value. The seventh test that fails with your function is verifying if NaN is equal to NaN. We know that NaN is of the same type of NaN, but also that NaN is never equal to NaN. It's a trap case: try your function with 1 and 2 as parameters:
//  it's an expected behavior?
//   You can deepen the NaN concept here, apart
//    of the two links in the Resources tab. Have a nice coding!
