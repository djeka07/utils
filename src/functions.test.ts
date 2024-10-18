import { describe, expect, test } from 'vitest';
import { isAsync } from './functions';

describe('GIVEN isAsync', () => {
  test('WHEN function is sync THEN should return false', () => {
    const syncFn = () => {
      return 'syncFn';
    };
    expect(isAsync(syncFn)).toBeFalsy();
  });

  test('WHEN function is async THEN should return true', () => {
    const asyncFn = async () => {
      const promise = new Promise((resolve) => setTimeout(resolve, 100));
      return promise;
    };
    expect(isAsync(asyncFn)).toBeTruthy();
  });
});
