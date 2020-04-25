import { diffArray, diffArray3 } from '../diff_array';

describe('testing diff array algo', () => {
  test('should return correct value array', () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
    expect(diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
  });
});
