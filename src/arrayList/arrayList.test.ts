import { ArrayList } from "."

describe("ArrayList", () => {
  test("should have the correct types ", () => {
    const ll = new ArrayList()
    expect(typeof ll.data).toBe("object")
    expect(typeof ll.length).toBe("number")
  })
  test("methods should work correctly", () => {
    const ll = new ArrayList()

    expect(ll.length).toBe(0)

    ll.push(1)
    ll.push(2)
    ll.push(3)
    ll.push(4)

    expect(ll.length).toBe(4)
    expect(ll.get(2)).toBe(3)

    ll.pop()
    expect(ll.length).toBe(3)

    ll.delete(1)
    expect(ll.length).toBe(2)

    expect(ll.get(1)).toBe(3)

    ll.push(11)
    ll.push(12)
    ll.push(13)
    ll.push(14)

    expect(ll.length).toBe(6)
    ll.collapseTo(4)

    expect(ll.get(4)).toBe(14)
    expect(ll.length).toBe(5)
  })
})
