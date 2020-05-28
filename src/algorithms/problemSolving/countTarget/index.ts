const countTarget = (str: string, target: string): number =>
  str
    .split('')
    .map(x => {
      let foundTarget;
      if (x === target) {
        foundTarget = x;
      }
      return foundTarget;
    })
    .filter(x => x !== undefined).length;

console.log(countTarget('hello there', 'l'));
