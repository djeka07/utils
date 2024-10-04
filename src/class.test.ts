import { expect, describe, test } from 'vitest';
import { css } from './class';

describe('GIVE css', () => {
  test('WHEN gets undefined as input THEN should return empty string', () => {
    expect(css(undefined)).toBe('');
  });

  test('WHEN gets multiple strings as input THEN should return strings with spaces', () => {
    expect(css('hej', 'test', 'test2')).toBe('hej test test2');
  });

  test('WHEN gets multiple strings and an object with true as input THEN should return strings with spaces', () => {
    expect(css('hej', 'test', { test2: true })).toBe('hej test test2');
  });

  test('WHEN gets multiple strings as input and an object with value false THEN should return strings with spaces without the object key in string', () => {
    expect(css('hej', 'test', { test2: false })).toBe('hej test');
  });

  test('WHEN gets multiple strings and an array as input THEN should return strings with spaces', () => {
    expect(css('hej', 'test', ['test2'])).toBe('hej test test2');
  });

  test('WHEN gets multiple strings as with array with object with value true input THEN should return strings with spaces', () => {
    expect(css('hej', 'test', [{ test2: true }])).toBe('hej test test2');
  });
  test('WHEN gets multiple strings as with array with object with value true input THEN should return strings with spaces', () => {
    expect(css('hej', 'test', [{ test2: false }])).toBe('hej test');
  });
});
