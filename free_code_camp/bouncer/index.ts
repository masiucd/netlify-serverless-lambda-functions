function bouncer(arr: any[]) {
  // const falsyValues = [false, null, 0, '', undefined, NaN];
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      res.push(arr[i]);
    }
  }

  return arr.filter(x => {
    if (x) {
      return x;
    }
  });

  // return res;
}

const x = bouncer([7, 'ate', '', false, 9]);
const xx = bouncer([null, NaN, 1, 2, undefined]);
// console.log(x);
console.log(xx);
