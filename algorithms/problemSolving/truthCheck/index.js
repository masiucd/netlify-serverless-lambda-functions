const a = truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex'
); // true

// const b = truthCheck(
//   [
//     { user: 'Tinky-Winky', sex: 'male' },
//     { user: 'Dipsy' },
//     { user: 'Laa-Laa', sex: 'female' },
//     { user: 'Po', sex: 'female' },
//   ],
//   'sex'
// ); // false
// const c = truthCheck(
//   [
//     { name: 'Pete', onBoat: true },
//     { name: 'Repeat', onBoat: true },
//     { name: 'FastFoward', onBoat: null },
//   ],
//   'onBoat'
// ); // false
/**
 *
 * @param {Object[]} collection
 * @param {string} pre
 * @returns {boolean}
 */
function truthCheck(collection, pre) {
  // Is everyone being true?
  const arrLength = collection.length;
  let count = 0;
  for (const val of collection) {
    val[pre] ? count++ : null;
  }
  // console.log(arrLength);
  return count === arrLength;
}

console.log(a);
