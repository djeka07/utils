import { describe, expect, test } from 'vitest';
import { chunk, difference, flat, groupBy, isEmpty, sortBy, unique } from './array';

describe('GIVEN isEmpty', () => {
  test('WHEN array is null THEN should return true', () => {
    expect(isEmpty(null)).toBeTruthy();
  });
  test('WHEN array is undefined THEN should return true', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });
  test('When array is empty THEN should return true', () => {
    expect(isEmpty([])).toBeTruthy();
  });
  test('WHEN array containing items THEN should return false', () => {
    expect(isEmpty(['hej'])).toBeFalsy();
  });
});

describe('GIVEN flat', () => {
  test('WHEN array contains multiple arrays THEN should flatten to a single array with all the items', () => {
    const array = ['hej', ['hej1', ['hej2', ['hej3', ['hej4']]]], ['hej5']];
    const expectedResult = ['hej', 'hej1', 'hej2', 'hej3', 'hej4', 'hej5'];
    expect(flat(array)).toEqual(expectedResult);
  });
  test('WHEN array is empty THEN should return an empty array', () => {
    expect(flat([])).toEqual([]);
  });
  test('WHEN array is undefined THEN should return an empty array', () => {
    expect(flat(undefined)).toEqual([]);
  });
  test('WHEN array is null THEN should return an empty array', () => {
    expect(flat(null)).toEqual([]);
  });
});

describe('GIVEN unique', () => {
  test('WHEN the arrays contains the same value THEN should filter out thoose values so they only appears once', () => {
    const arr = ['test', 'test', 'test', 'test1', 'test2'];
    const expectedResult = ['test', 'test1', 'test2'];
    expect(unique(arr)).toEqual(expectedResult);
  });
  test('WHEN array is empty THEN should return an empty array', () => {
    expect(unique([])).toEqual([]);
  });
  test('WHEN array is null THEN should return an empty array', () => {
    expect(unique(null)).toEqual([]);
  });
  test('WHEN array is undefined THEN should return an empty array', () => {
    expect(unique(undefined)).toEqual([]);
  });
});

describe('GIVEN difference', () => {
  test('WHEN the first array contains values that is not in the second array THEN should return thoose valus THEN should', () => {
    const arr1 = ['test', 'test2', 'test4', 'test5'];
    const arr2 = ['test', 'test1', 'test3', 'test2'];
    const expectedResult = ['test4', 'test5'];
    expect(difference(arr1, arr2)).toEqual(expectedResult);
  });

  test('WHEN the second array has all the values as the first array THEN should return an empty array', () => {
    const arr1 = ['test', 'test2', 'test4'];
    const arr2 = ['test', 'test1', 'test3', 'test2', 'test4'];
  
    expect(difference(arr1, arr2)).toEqual([]);
  });

  test('WHEN the first array is empty THEN should return an empty array', () => {
    const arr1: string[] = [];
    const arr2 = ['test', 'test1', 'test3', 'test2', 'test4'];
    expect(difference(arr1, arr2)).toEqual(arr1);
  });
  test('WHEN the first array is undefined THEN should return an empty array', () => {
    const arr2 = ['test', 'test1', 'test3', 'test2', 'test4'];
    expect(difference(undefined, arr2)).toEqual([]);
  });
  test('WHEN the first array is null THEN should return an empty array', () => {
    const arr2 = ['test', 'test1', 'test3', 'test2', 'test4'];
    expect(difference(null, arr2)).toEqual([]);
  });

  test('WHEN the second array is undefined THEN should return the first array', () => {
    const arr1 = ['test', 'test1', 'test3', 'test2', 'test4'];
    expect(difference(arr1, undefined)).toEqual(arr1);
  });
  test('WHEN the second array is null THEN should return the first array', () => {
    const arr1 = ['test', 'test1', 'test3', 'test2', 'test4'];
    expect(difference(arr1, null)).toEqual(arr1);
  });
});

describe('GIVEN groupBy', () => {
  test('WHEN given an array with objects THEN should return an object with grouped properties', () => {
    const arr = [
      { code: 'hej', name: 'hej' },
      { code: 'hej', name: 'hej2' },
      { code: 'hej2', name: 'hej3' },
      { code: 'hej2', name: 'hej4' }
    ];
    const expectedResult = {
      hej: [
        { code: 'hej', name: 'hej' },
        { code: 'hej', name: 'hej2' }
      ],
      hej2: [
        { code: 'hej2', name: 'hej3' },
        { code: 'hej2', name: 'hej4' }
      ]
    };
    expect(groupBy(arr, 'code')).toEqual(expectedResult);
  });
  test('WHEN array is empty THEN should return an empty object', () => {
    expect(groupBy([], 'test')).toEqual({});
  });
  test('WHEN array is null THEN should return an empty object', () => {
    expect(groupBy(null, 'test')).toEqual({});
  });
  test('WHEN array is undefined THEN should return an empty object', () => {
    expect(groupBy(undefined, 'test')).toEqual({});
  });
});

describe('GIVEN sortBy', () => {
  test('WHEN array is a string array THEN should sort the strings in correct order', () => {
    const array = ['pear', 'oranges', 'apples', 'bananas'];
    const expectedResult = ['apples', 'bananas', 'oranges', 'pear'];
    expect(sortBy(array)).toEqual(expectedResult);
  });
  test('WHEN array is number array THEN shouldm sort the numbers in correct order', () => {
    const array = [100, 44, 150, 3];
    const expectedResult = [3, 44, 100, 150];
    expect(sortBy(array)).toEqual(expectedResult);
  });
  test('WHEN array is a object and property to sort by is provided THEN should sort according to the sort property', () => {
    const array = [{ name: 'oranges' }, { name: 'pear' }, { name: 'bananas' }, { name: 'apples' }];
    const expectedResult = [{ name: 'apples' }, { name: 'bananas' }, { name: 'oranges' }, { name: 'pear' }];
    expect(sortBy(array, 'name')).toEqual(expectedResult);
  });
  test('WHEN array is empty THEN should return an empty array', () => {
    const array: { name: string }[] = [];
    expect(sortBy(array, 'name')).toEqual([]);
  });

  test('WHEN array is undefined THEN should return an empty array', () => {
    expect(sortBy(undefined, 'name')).toEqual([]);
  });

  test('WHEN array is null THEN should return an empty array', () => {
    expect(sortBy(null, 'name')).toEqual([]);
  });

  test('WHEN array is an object and both property to sort by and then by is provided THEN should sort by first on property to sort by and the respect then by sort', () => {
    const array = [
      { name: 'oranges', placementInList: 3 },
      { name: 'pear', placementInList: 4 },
      { name: 'bananas', placementInList: 4 },
      { name: 'apples', placementInList: 3 }
    ];
    const expectedResult = [
      { name: 'apples', placementInList: 3 },
      { name: 'oranges', placementInList: 3 },
      { name: 'bananas', placementInList: 4},
      { name: 'pear', placementInList: 4 }
    ];

    const result = sortBy(array, 'placementInList', 'name');
    expect(result).toStrictEqual(expectedResult);
  });
});

describe('GIVEN chunk', () => {
  test('WHEN array is contain numbers and size is 3 THEN should return an array with sub arrays containing size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedResult = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
    expect(chunk(array, 3)).toEqual(expectedResult);
  });

  test('WHEN array is empty THEN should return an empty array', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  test('WHEN array is undefined THEN should return an empty array', () => {
    expect(chunk(undefined, 3)).toEqual([]);
  });

  test('WHEN array is null THEN should return an empty array', () => {
    expect(chunk(null, 3)).toEqual([]);
  });
});