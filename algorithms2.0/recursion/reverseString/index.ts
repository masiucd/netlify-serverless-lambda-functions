function reverseString(str: string): string {
  if (str === '') return '';
  console.log(str);
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('monkey'));
