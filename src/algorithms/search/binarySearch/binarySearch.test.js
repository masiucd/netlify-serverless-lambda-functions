const binarySearch = require('./index');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

test('binarySearch shoud be declared', () => {
  expect(binarySearch).toBeDefined();
});

test('Calling binarySearch with sorted array gives back a number', () => {
  expext(binarySearch(arr, 9)).toBe(8);
  expext(binarySearch(arr, 212)).toBe(-1);
});
