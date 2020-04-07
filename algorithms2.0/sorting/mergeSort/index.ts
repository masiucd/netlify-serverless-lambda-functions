const numbersArray = [9, 100, 2, -1, 0, 77, 3, -99, 22, 1, 321];
function merge(left: number[], right: number[]): number[] {
  const res: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    // if left array first item is smaller
    // then psuh it to the res array
    if (left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      // else push the higher value
      res.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const mergeSort = (numbers: number[]): number[] => {
  if (numbers.length <= 1) return numbers;

  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(numbersArray));
