const blahBlah = (str: string, n: number): any => {
  const test = str.split(' ');
  const res = [];
  const blah = 'blah '.repeat(n);
  for (let i = 0; i < test.length - n; i++) {
    console.log(test[i]);
    res.push(test[i]);
  }

  res.push(blah);
  return res.join(' ');
};

console.log(
  blahBlah('A function is a block of code which only runs when it is called', 5)
);

// blahBlah("A function is a block of code which only runs when it is called",  5)
// ➞ "A function is a block of code which only blah blah blah blah blah..."

// blahBlah("one two three four five", 2) ➞ "one two three blah blah..."

// blahBlah("Sphinx of black quartz judge my vow", 10) ➞ "blah blah blah blah blah blah blah..."
