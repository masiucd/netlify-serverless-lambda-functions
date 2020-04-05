/**
 *
 * @param {number} chickenLegs
 * @param {number} cowsLegs
 * @param {number} pigsLEgs
 * @returns {number}
 */
const farmProblem = (chickenLegs, cowsLegs, pigsLEgs) =>
  chickenLegs * 2 + cowsLegs * 4 + pigsLEgs * 4;

console.log(farmProblem(2, 3, 5));
