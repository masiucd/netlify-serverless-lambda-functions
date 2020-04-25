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

const x = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
const x2 = diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);
console.log(x2);
