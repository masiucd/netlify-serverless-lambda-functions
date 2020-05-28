// Naive version
const sumZero = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

const sum = sumZero([-3, -2, -1, 0, 1, 2, 3]);

const sumZero2 = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};

const sum2 = sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]);

console.log(sum2);
module.exports = {
  sumZero,
  sumZero2,
};
