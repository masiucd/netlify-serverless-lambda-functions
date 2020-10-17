/* eslint-disable no-unused-expressions */
const itemsToSort = [6, 9, 2, 1, 10, 2]

function quickSort(array: number[]): number[] {
  if (array.length < 2) return array

  const pivotIndex = Math.floor(array.length / 2)
  const pivot = array[pivotIndex]
  const less = []
  const greater = []
  for (const [index, val] of array.entries()) {
    if (index !== pivotIndex) {
      array[index] > pivot
        ? greater.push(array[index])
        : less.push(array[index])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

export { quickSort }
