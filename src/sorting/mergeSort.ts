const list = [19, 100, 2, 45, 2, 3, 99, 1, 5]

export const merge = (left: number[], right: number[]) => {
  const sorted = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  return [...sorted, ...left, ...right]
}

export const mergeSort = (xs: number[]) => {
  if (xs.length <= 2) return xs
  const middle = Math.floor(xs.length / 2)
  const left = xs.slice(0, middle)
  const right = xs.slice(middle)

  const sortedLeft = mergeSort(left) as number[]
  const sortedRight = mergeSort(right) as number[]

  return merge(sortedLeft, sortedRight)
}

let res = mergeSort(list)
