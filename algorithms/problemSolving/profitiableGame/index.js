/**
 *
 * @param {number} prob
 * @param {number} prize
 * @param {number} pay
 * @returns {boolean}
 */
const profitableGamble = (prob, prize, pay) => prob * prize > pay;

console.log(profitableGamble(0.9, 3, 2));
