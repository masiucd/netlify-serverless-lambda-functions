/* eslint-disable no-unused-expressions */
function diffArray(arr1: any[], arr2: any[]) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      res.push(arr2[i]);
    }
    if (arr2.indexOf(arr1[i]) === -1) {
      res.push(arr1[i]);
    }
  }
  return res.filter(x => x !== undefined);
}

function diffArray2(arr1: any[], arr2: any[]) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  const res = [];
  const map: any = {};
  for (const n of arr1) {
    map[n] ? (map[n] += 1) : (map[n] = 1);
  }
  for (const n of arr2) {
    map[n] ? (map[n] += 1) : (map[n] = 1);
  }

  for (const [key, val] of Object.entries(map)) {
    if (map[key] === 1) {
      res.push(key);
    }
  }

  return res;
}

function diffArray3(arr1: any[], arr2: any[]) {
  const xs: any[] = [...arr1, ...arr2];
  return xs.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

const x = diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5]);
const x2 = diffArray3(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);
console.log(x);
console.log(x2);
