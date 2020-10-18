export class ArrayList {
  length: number
  data: Record<string, any>

  constructor() {
    this.length = 0
    this.data = {}
  }

  push<T>(item: T) {
    this.data[this.length] = item
    this.length++
  }

  pop() {
    let last = this.length - 1
    delete this.data[last]
    this.length--
  }
  get(index: number) {
    return this.data[index]
  }

  delete(index: number) {
    const selectedItem = this.data[index]
    this.collapseTo(index)
    return selectedItem
  }

  collapseTo(index: number) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const list = new ArrayList()
