const isEqual = (n1, n2) =>
  typeof n1 === 'number' && typeof n2 === 'number' && n1 === n2;

console.log(isEqual(5, '5'));
