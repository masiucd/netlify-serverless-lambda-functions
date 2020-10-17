import * as insertion from "./insertionSort"
jest.spyOn(insertion, "insertionSort")
describe("insertionSort", () => {
  test("should sort with insertionsort", () => {
    let arr = [5, 3, 1, 2, 4]
    let copy = arr.slice()
    expect(insertion.insertionSort(arr)).toEqual([1, 2, 3, 4, 5])
    expect(arr).toEqual(copy)
    expect(insertion.insertionSort).toHaveBeenCalled()
  })
})
