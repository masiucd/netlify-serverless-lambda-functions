import { search } from './BinarySearch';

describe('testing Search', () => {
  test('should return correct target number', () => {
    expect(search([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  });
});
