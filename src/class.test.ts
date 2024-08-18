import { expect, describe, test } from 'vitest';
import { css } from './class';

describe('GIVE css', () => {
  test('WHEN gets undefined as input THEN should return empty string', () => {
    expect(css(undefined)).toBe('')
  })

  test('WHEN gets multiple strings as input THEN should return strings with spaces', () => {
    expect(css('hej', 'test', 'test2')).toBe('hej test test2')
  })
});