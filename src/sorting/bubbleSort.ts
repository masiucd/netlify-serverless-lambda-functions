const swap = (list: number[], idx1: number, idx2: number) =>
  [list[idx1], list[idx2]][(list[idx2], list[idx1])]

export const bubbleSort = (xs: number[]): number[] => {
  for (let i = 0; i < xs.length; i++) {
    for (let j = 0; j < xs.length; j++) {
      if (xs[j] > xs[j + 1]) {
        let temp = xs[j]
        xs[j] = xs[j + 1]
        xs[j + 1] = temp
      }
    }
  }
  return xs
}

const list = [19, 100, 2, 45, 2, 3, 99, 1, 5]

const res = bubbleSort(list)
