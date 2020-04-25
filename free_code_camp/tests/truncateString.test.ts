/* eslint-disable import/no-unresolved */
import { truncateString, x, xs } from '../truncate_str';

describe('truncateString tests', () => {
  test('truncateString pattern maching', () => {
    expect(truncateString(x, 8)).toMatch(/[a-zA-z]/g);
    expect(truncateString(x, 8)).not.toBeNull();
  });
});
