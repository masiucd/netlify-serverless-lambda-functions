const fx = arr => {
  const res = [];
  const helper = input => {
    if (input.length === 0) return input;
    if (input[0] % 2 !== 0) {
      res.push(input[0]);
    }
    return helper(input.slice(1));
  };

  helper(arr);
  return res;
};

const f = arr => {
  let res = [];
  if (arr.length === 0) return arr;
  if (arr[0] % 2 !== 0) {
    res.push(arr[0]);
  }
  res = res.concat(f(arr.slice(1)));
  return res;
};

// console.log(f([1, 2, 3, 4, 5, 6, 7, 8]));
