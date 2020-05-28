function takeShower(fn) {
  return `Time for a shower and ${fn}`;
}

function PowdSomeFood() {
  const meal = cookFood();
  return `Eating some ${meal}`;
}

function cookFood() {
  const foodItems = ['pancakes', 'sandwich', 'eggs', 'super ramen bowl'];
  return foodItems[Math.floor(Math.random() * foodItems.length)];
}

function wakeWake() {
  return takeShower(PowdSomeFood());
}

console.log(wakeWake());
