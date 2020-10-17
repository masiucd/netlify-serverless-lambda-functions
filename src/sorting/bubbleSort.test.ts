import * as bubble from "./bubbleSort"
jest.spyOn(bubble, "bubbleSort")
describe("bubblesort", () => {
  test("should sort with bubblesort", () => {
    const list = [3, 2, 1, 10]
    expect(bubble.bubbleSort(list)).toEqual([1, 2, 3, 10])
    expect(bubble.bubbleSort).toHaveBeenCalled()
    list.forEach(v => expect(typeof v).toBe("number"))
  })
})
