/* eslint-disable no-prototype-builtins */
function whatIsInAName(collection: any[], source: any) {
  const sourceKeys = Object.keys(source);
  const xs = collection.filter(obj =>
    sourceKeys.every(val => obj.hasOwnProperty(val) && obj[val] === source[val])
  );
  console.log(xs);
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);

// should return [{ first: "Tybalt", last: "Capulet" }].

function whatIsInAName2(collection: any[], source: any) {
  const sourceKeys = Object.keys(source);

  const xs = collection.filter(obj => {
    for (const [index, key] of sourceKeys.entries()) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
  return xs;
}

whatIsInAName2(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
// [{ "apple": 1, "bat": 2, "cookie": 2 }].
