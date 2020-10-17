export const insertionSort = (list: number[]): number[] => {
  let copyList = list.slice()
  for (let i = 1; i < copyList.length; i++) {
    for (let j = 0; j < i; j++) {
      if (copyList[i] < copyList[j]) {
        const [spliced] = copyList.splice(i, 1)
        copyList.splice(j, 0, spliced)
      }
    }
  }
  return copyList
}

let arr = [5, 3, 1, 2, 4]

const output = insertionSort(arr)
