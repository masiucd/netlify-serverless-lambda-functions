class HashMap {
  size: number;

  data: string[] | any[];

  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key: string, value: number) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key: string) {
    const address = this._hash(key);
    const bucket: Array<String | number> = this.data[address];
    if (bucket.length) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][0];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data) {
      return undefined;
    }
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && !undefined) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const hashTable = new HashMap(25);
hashTable.set('kiwis', 4);
hashTable.set('jackfruit', 89);
hashTable.set('apples', 12);
// console.log(hashTable);
// console.log(hashTable.get('kiwis'));
console.log(hashTable.keys());
