const firstRecurring = (xs: number[]) => {
  const map = {};
  const res = [];
  for (const val of xs) {
    map[val] ? (map[val] += 1) : (map[val] = 1);
  }
  for (let i = 0; i < xs.length; i++) {
    // console.log(map[xs[i]]);
    if (map[xs[i]] > 1) {
      res.push(xs[i]);
    }
  }
  return res[0];
};
const firstRecurring2 = (xs: number[]) => {
  const res = [];
  const map = xs.reduce((obj, val) => {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
    return obj;
  }, {});

  for (let i = 0; i < xs.length; i++) {
    if (map[xs[i]] === 2) {
      res.push(xs[i]);
    }
  }
  return res.length > 0 ? res[0] : undefined;
};

// console.log(firstRecurring2([1, 2, 3, 4, 5, 6, 7, 8, 9, 2]));
// console.log(firstRecurring2([1, 2, 1, 3]));
// console.log(firstRecurring2([1, 2, 3]));
// console.log(firstRecurring([3, 1, 2, 6, 4, 3, 2, 3, 1]));

const firstRecurring3 = (xs: number[]) => {
  for (let i = 0; i < xs.length; i++) {
    for (let j = i + 1; j < xs.length; j++) {
      console.log('i: ', xs[i], 'j: ', xs[j]);
      if (xs[i] === xs[j]) {
        return xs[i];
      }
    }
  }
  return undefined;
};

// console.log(firstRecurring3([1, 2, 3, 4, 1]));
// console.log(firstRecurring3([1, 2, 3, 4, 3]));
// console.log(firstRecurring3([1, 2, 3, 4, 5]));
// console.log(firstRecurring3([1, 2, 3, 4, 5, 6, 7, 1]));

const firstRecurring4 = (xs: number[]) => {
  const map = {};
  for (const val of xs) {
    if (map[val] !== undefined) {
      return map[val];
    }
    map[val] = val;
  }
  return undefined;
};

console.log(firstRecurring4([1, 2, 3, 4, 1]));
console.log(firstRecurring4([1, 2, 3, 4, 6, 4]));
console.log(firstRecurring4([1, 2, 3, 4]));
console.log(firstRecurring4([1, 2, 3, 4, 5, 6, 7, 8, 9, 5]));
