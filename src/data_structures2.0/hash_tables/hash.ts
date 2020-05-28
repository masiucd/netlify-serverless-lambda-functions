class HashTable {
  size: number;

  data: string[] | any[];

  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key: string, value: number) {
    const address = this._hash(key);
    // if no data in that step and to avoid collisions
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key: string) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    // if there is something in the bucket
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][0];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) return undefined;
    const keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0][0]);
      }
    }
    return keyArray;
  }
}

const ht = new HashTable(50);
ht.set('bananas', 2);
ht.set('apples', 17);
ht.set('kiwis', 21);
ht.set('mangos', 3);
// console.log(ht.get('apples'));
// console.log(ht.get('bananas'));
// console.log(ht.get(2));
// console.log(ht._hash('apa'));
console.log(ht.keys());
