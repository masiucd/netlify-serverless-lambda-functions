/* eslint-disable prefer-const */
const uniqueValues = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(arr);
  return i + 1;
};

const xs = [1, 1, 1, 1, 1, 1, 1, 2]; // 2
const xss = [1, 1, 2, 3, 4, 4, 4, 5]; // 2

// console.log(uniqueValues(xss));

const fn = (arr: number[]) => {
  // @ts-ignore
  let map: any = arr.reduce((obj: any, val: any) => {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
    return obj;
  }, {});

  console.log(map);
  console.log(Object.entries(map));
  console.log(Object.values(map));
  let set = new Set(Object.values(map));

  console.log(set);
};

console.log(fn([1, 2, 3, 4, 4, 4, 5, 5, 6]));
