export type Value = string | boolean | undefined | null;
export type Mapping = Record<string, unknown>;
export type ArgumentArray = Array<Argument>;
export type Argument = Value | Mapping | ArgumentArray;

const createClassesString = (classes: ArgumentArray): string => {
  return classes
    .map((currClass) => {
      if (!currClass) {
        return '';
      }
      if (typeof currClass === 'string') {
        return currClass;
      }
      if (typeof currClass !== 'object') {
        return '';
      }

      if (Array.isArray(currClass)) {
        return createClassesString(currClass);
      }

      return Object.keys(currClass)
        .map((key) => (currClass[key] ? key : ''))
        .join(' ');
    })
    .filter((s) => !!s)
    .join(' ');
};

export const css = (...classes: ArgumentArray) => createClassesString(classes);
