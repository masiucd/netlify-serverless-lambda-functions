const rob = (houses: number[]): number => {
  let prev = 0;
  let cur = 0;
  for (const n of houses) {
    const temp = cur;
    cur = Math.max(prev + n, cur);
    prev = temp;
  }

  console.log(prev, cur);
  return Math.max(cur, prev);
};

// console.log(rob([2, 1]));
// console.log(rob([1, 2]));
console.log(rob([1, 2, 3, 1]));
// console.log(rob([2, 7, 9, 3, 1]));

// The robber can either rob the current house, or not rob the current house.
// If the robber choose to rob the current house, it means he has to skip the next house
// If the robber choose not rob the current house, it means he can go to the next house and decide again.
