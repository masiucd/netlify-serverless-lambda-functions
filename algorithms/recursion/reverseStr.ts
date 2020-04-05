const reverseStr = (str: string): string => {
  if (str.length === 0) return '';
  return reverseStr(str.slice(1)) + str[0];
};

console.log(reverseStr('hello'));
