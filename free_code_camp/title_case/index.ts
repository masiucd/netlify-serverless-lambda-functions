function titleCase(str: string) {
  const xs = str
    .toLowerCase()
    .split(' ')
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join(' ');
  return xs;
}

titleCase("I'm a little tea pot");
titleCase('sHoRt AnD sToUt');
