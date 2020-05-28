/**
 *
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const nums = [...Array(n).keys()];
  for (let i = 2; i * i < n; i++) {
    if (nums[i]) {
      for (let j = i * i; j < n; j += i) {
        nums[j] = 1;
      }
    }
  }

  return nums.filter(x => x > 1).length;
}

console.log(countPrimes(10)); // 4
