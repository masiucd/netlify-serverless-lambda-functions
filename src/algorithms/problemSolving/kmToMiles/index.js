// @ts-nocheck
/**
 *
 * @param {number} kilometers
 * @returns {number}
 */
function kmtomiles(kilometers) {
  return kilometers * (0.62137119).toPrecision(5);
}

console.log(kmtomiles(2)); // 1.24274
