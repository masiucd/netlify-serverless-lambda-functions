/* eslint-disable prefer-const */
function mostFrequentValue(arr: string[]) {
  let max = 0;
  let frequentStr = '';
  let map = arr.reduce((obj, val) => {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
    return obj;
  }, {});
  for (let val of arr) {
    if (max < map[val]) {
      max = map[val];
      frequentStr = val;
    }
  }
  return frequentStr;
}

console.log(
  mostFrequentValue(['mike', 'tim', 'mike', 'jon', 'linda', 'linda', 'mike'])
);
