import { cssPrefix, pipe,numberToArray } from "../helpers";

test("cssprefix", () => {
  const cls = cssPrefix("nav");
  expect(cls).toEqual("rec rec-nav");
});

test("pipe", () => {
  const inc = (num) => {
    return num + 1;
  };
  const double = (num) => {
    return num * 2;
  };
  const split = (num) => {
    return num / 2;
  };

  const result = split(double(inc(2)));
  const piped = pipe(inc, double, split);
  expect(result).toEqual(piped(2));
});

test("numberToArray", () => {
  const arr = numberToArray(5);
  expect(Array.isArray(arr)).toEqual(true);
  expect(arr.length).toEqual(5);
});
