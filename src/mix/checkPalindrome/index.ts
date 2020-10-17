const checkPalindrome = function (s: string) {
  // 1 reverse string
  // 2 compare it with the input string

  return s.split("").reverse().join("") === s;
};
