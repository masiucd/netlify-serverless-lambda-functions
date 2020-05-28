const largestSwap = (num: number): boolean => {
  const swap = num
    .toString()
    .split('')
    .reverse()
    .join('');

  return Number(swap) > num;
};

console.log(largestSwap(123));
console.log(largestSwap(321));
