const converterHS = (h, m) => {
  const fromHoursToSeconds = h * 3600;
  const fromMinToSec = m * 60;

  return fromHoursToSeconds + fromMinToSec;
};

console.log(converterHS(1, 3));
