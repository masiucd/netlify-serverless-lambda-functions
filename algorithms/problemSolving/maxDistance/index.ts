/* eslint-disable prefer-const */
const maxDistToClosest = function(seats: number[]): number {
  let zeros = seats.join('').split('1');
  return Math.max(
    zeros.shift().length,
    zeros.pop().length,
    ...zeros.map(x => (x.length > 0 ? Math.floor((x.length + 1) / 2) : 0))
  );
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])); // 2
// console.log(maxDistToClosest([1, 0, 0, 0])); // 3
