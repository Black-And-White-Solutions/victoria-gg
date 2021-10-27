export const accum: (arg0: string) => string = (str: string) => {
  let output = '';
  Array.from(str).forEach((letter, index) => {
    output =
      output +
      letter.toUpperCase() +
      letter.repeat(index) +
      (index < str.length - 1 ? '-' : '');
  });
  return output;
};
