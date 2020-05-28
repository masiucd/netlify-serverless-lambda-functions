import { chunkArrayInGroups } from '../chunk_array';

describe('chunk array test', () => {
  test('should chunk the array in correct way ', () => {
    expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });
});
