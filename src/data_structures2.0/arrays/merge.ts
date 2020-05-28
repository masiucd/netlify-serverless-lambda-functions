const merge = (arr1, arr2) => {
  const singleArr = [...arr1, ...arr2].sort((a, b) => a - b);
  return singleArr;
};

const array1 = [6, 2, 9, 32];
const array2 = [3, 7, 100, 1];
console.log(merge(array1, array2));
