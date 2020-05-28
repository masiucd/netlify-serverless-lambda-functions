/* eslint-disable prefer-const */
function spinalCase(str: string) {
  // Create a variable for the white space and underscores.
  let re = /\s+|_+/g;
  let re2 = /([a-z])([A-Z])/g;
  let res = str.replace(re2, '$1 $2');
  // Replace low-upper case to low-space-uppercase
  // Replace space and underscore with -
  return res.replace(re, '-').toLowerCase();
}

let a = spinalCase('This Is Spinal Tap'); // "this-is-spinal-tap"
let x = spinalCase('thisIsSpinalTap');
let b = spinalCase('The_Andy_Griffith_Show');

console.log(a, x, b);
