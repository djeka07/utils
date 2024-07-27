export const compose = <T>(fn1: (a: T) => T, ...fns: Array<(a: T) => T>) =>
  fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);

export const pipe = <T extends any[], U>(fn1: (...args: T) => U, ...fns: Array<(a: U) => U>) => {
  const piped = fns.reduce(
    (prevFn, nextFn) => (value: U) => nextFn(prevFn(value)),
    (value) => value,
  );
  return (...args: T) => piped(fn1(...args));
};
