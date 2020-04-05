/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function concatName(firstName, lastName) {
  const name = [lastName, firstName].join(', ');

  return `${name},`;
}

console.log(concatName('John', 'Doe'));
