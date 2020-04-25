function confirmEnding(str: string, target: string) {
  const targetLen = target.length;
  return str.slice(-targetLen) === target;
  // return str.substr(str.length - 1) === target;
}

const x = confirmEnding('Bastian', 'n'); // true
const xs = confirmEnding('Congratulation', 'on'); // true
