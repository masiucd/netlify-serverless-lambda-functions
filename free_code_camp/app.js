/* eslint-disable prefer-const */

function cc(card) {
  let count = 0;

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
    default:
      break;
  }

  if (count > 0) {
    return `${count} Bet`;
  }
  if (count === 0) {
    return `${count} Bet`;
  }
  if (count < 0) {
    return `${count} Hold`;
  }
}

console.log(cc(2), cc(3), cc('K'), cc(7), cc('K'), cc('A'));
