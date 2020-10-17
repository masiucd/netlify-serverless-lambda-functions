import * as merge from "./mergeSort"
jest.spyOn(merge, "merge")
jest.spyOn(merge, "mergeSort")
describe("mergeSort", () => {
  test("should sort the list with merge sort ", () => {
    const list = [19, 100, 2, 45, 2, 3, 99, 1, 5]
    expect(merge.mergeSort(list)).toEqual([1, 2, 2, 3, 5, 19, 45, 99, 100])
    expect(merge.merge).toHaveBeenCalled()
    expect(merge.mergeSort).toHaveBeenCalled()
    expect(typeof list[0]).toBe("number")
  })
})
