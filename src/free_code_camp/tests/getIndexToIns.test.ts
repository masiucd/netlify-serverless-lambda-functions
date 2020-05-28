import { getIndexToIns } from '../where_do_i_belong';

describe('testing where do i belong', () => {
  test('should return correct value', () => {
    expect(getIndexToIns([40, 60], 50)).toBe(1);
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
    expect(getIndexToIns([10, 20, 30, 40, 50], 20)).toBe(1);
    expect(getIndexToIns([20, 10, 30, 50], 100)).toBe(4);
  });
});
