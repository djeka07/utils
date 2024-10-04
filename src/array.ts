export const sort = <T>(arr: T[]): T[] => {
  const sorted = arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return sorted as T[];
};

export const flat = <T>(arr?: T[] | null): T[] => {
  if (isEmpty(arr)) {
    return [];
  }
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val) : val), [] as T[]);
};

export const isEmpty = (arr?: unknown[] | null): arr is undefined | null | [] => !arr || arr.length === 0;

export const difference = <T>(arrOne?: T[] | null, arrTwo?: T[] | null): T[] => {
  if (isEmpty(arrOne)) {
    return [];
  }
  if (isEmpty(arrTwo)) {
    return arrOne;
  }
  const arrOneSet = new Set(arrOne);
  const arrTwoSet = new Set(arrTwo);
  return [...new Set([...arrOneSet].filter((x) => !arrTwoSet.has(x)))];
};

export const unique = <T>(arr?: T[] | null, property?: keyof T): T[] => {
  if (isEmpty(arr)) {
    return [];
  }
  if (!property) {
    return [...new Set(arr)] as T[];
  }

  const result = [];
  const map = new Map();
  for (const item of arr) {
    if (!map.has(item[property])) {
      map.set(item[property], true);
      result.push(item);
    }
  }
  return result;
};

export const sortBy = <T>(arr: T[] | null | undefined, propertyToSortBy?: keyof T, thenBy?: keyof T): T[] => {
  if (isEmpty(arr)) {
    return [];
  }
  return !propertyToSortBy
    ? sort(arr)
    : [...arr].sort((a, b) => {
        if (a[propertyToSortBy] < b[propertyToSortBy]) {
          return -1;
        }
        if (a[propertyToSortBy] > b[propertyToSortBy]) {
          return 1;
        }
        if (thenBy) {
          if (a[thenBy] < b[thenBy]) {
            return -1;
          }
          if (a[thenBy] > b[thenBy]) {
            return 1;
          }
        }

        return 0;
      });
};

export const groupBy = <T>(arr: T[] | null | undefined, propertyToGroup: keyof T): Record<keyof T, T[]> => {
  if (isEmpty(arr)) {
    return {} as Record<keyof T, T[]>;
  }

  return arr.reduce(
    (acc, val) => {
      const key = val[propertyToGroup] as keyof T;
      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(val);
      return acc;
    },
    {} as Record<keyof T, T[]>,
  );
};

export const chunk = <T>(arr: T[] | null | undefined, size: number): T[][] => {
  if (isEmpty(arr)) {
    return [];
  }
  return Array.from({ length: Math.ceil(arr.length / size) }, (_item, index) =>
    arr.slice(index * size, index * size + size),
  );
};
