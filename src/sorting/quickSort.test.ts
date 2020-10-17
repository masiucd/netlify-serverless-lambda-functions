import * as quickSort from "./quickSort"

jest.spyOn(quickSort, "quickSort")

describe("quickSort", () => {
  test("should work correctly", () => {
    const itemsToSort = [6, 9, 2, 1, 10, 2]
    const sorted = quickSort.quickSort(itemsToSort)
    expect(sorted).toEqual([1, 2, 2, 6, 9, 10])
    expect(quickSort.quickSort).toHaveBeenCalled()
  })
})
