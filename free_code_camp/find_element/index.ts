function findElement(arr: number[], func: Function) {
  // const num = 0;
  // return num;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }

  return undefined;
}

const y = findElement([1, 2, 3, 4], (num: any) => num % 2 === 0);
const x = findElement([1, 3, 5, 8, 9, 10], (num: any) => num % 2 === 0);
console.log(x);
