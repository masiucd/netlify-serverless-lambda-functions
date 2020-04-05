
/* eslint-disable no-restricted-syntax */
const areThereDublicates = (...args) => {
  const map = {};
  for (const key of args) {
    map[key] ? (map[key] += 1) : (map[key] = 1);
  }

  for (const val in map) {
    if (map[val] > 1) return false;
  }
  return true;
};

const areThereDublicates2 = (...args) =>
  [...new Set(args)].length === args.length;

const areThereDublicates3 = (...args) => {
  const argsCount = args.reduce((obj, arg) => {
    if (obj[arg]) {
      obj[arg] += 1;
    } else {
      obj[arg] = 1;
    }
    return obj;
  }, {});

  for (const val in argsCount) {
    if (argsCount[val] > 1) return false;
  }
  return true;
};
console.log(areThereDublicates3(1, 2, 3));
console.log(areThereDublicates3(3, 2, 1, 2));
console.log(areThereDublicates3('a', 'b', 'c'));
console.log(areThereDublicates3('a', 'b', 'c', 'a'));
