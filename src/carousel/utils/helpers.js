export const cssPrefix = (...classNames) => {
  const prefix = "rec";
  const space = " ";
  let result = prefix;

  const chainedClasses = classNames.reduce((accumlator, current) => {
    if (current) {
      accumlator += space + prefix + "-" + current;
    }
    return accumlator;
  }, "");
  result += chainedClasses;

  return result;
};

export const pipe = (...functions) => {
  return (x) => {
    return functions.reduce((accumlator, current) => current(accumlator), x);
  };
};

export const numberToArray = (n) =>{
    return [...Array(n).keys()];
}
