import { describe, test, expect } from 'vitest';
import { toLower } from './string';

describe('GIVEN toLower', () => {
  test('WHEN string input is null THEN should return an empty string', () => {
    expect(toLower(null)).toBe('');
  });
  test('WHEN string input is undefined THEN should return an empty string', () => {
    expect(toLower(undefined)).toBe('');
  });
  test('WHEN string input is empty string THEN should return an empty string', () => {
    expect(toLower(undefined)).toBe('');
  });
  test('WHEN string input is a uppercase THEN should return the string lowercase', () => {
    expect(toLower('INPUT')).toBe('input');
  });

  test('WHEN string input is a lowercase THEN should return the string', () => {
    expect(toLower('input')).toBe('input');
  });
});
