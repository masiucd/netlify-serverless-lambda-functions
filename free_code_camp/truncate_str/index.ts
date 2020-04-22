function truncateString(str: string, num: number) {
  if (str.length === num) return str;
  return `${str.slice(0, num)}...`;
}

const x = truncateString('A-tisket a-tasket A green and yellow basket', 8);
const xs = truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length
);
console.log(xs);
