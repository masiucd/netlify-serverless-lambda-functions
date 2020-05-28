/**
 * @param {number} num
 * @return {number}
 */

const countDown = num => {
  if (num < 1) {
    console.log('All Done');
    return num;
  }
  console.log(num);
  num -= 1;
  countDown(num);
};

console.log(countDown(5));
