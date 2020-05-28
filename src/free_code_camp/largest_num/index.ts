/* eslint-disable prefer-const */
function largestOfFour(arr: number[][]) {
  const res: any = [];
  for (let i = 0; i < arr.length; i++) {
    // save the first value in each sub array
    let currentMax = arr[i][0];
    // Just loop through each separate sub array
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > currentMax) {
        currentMax = arr[i][j];
      }
    }
    // index of i will be highest num in each sub array
    res[i] = currentMax;
  }
  return res;
}

function largestOfFour2(arr: any[][]) {
  return arr.map(val =>
    val.reduce((prev, curr) => (curr > prev ? curr : prev))
  );
}
function largestOfFour3(arr: any[][]) {
  return arr.map(Function.apply.bind(Math.max, null));
}

const xss = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

console.log(xss);
