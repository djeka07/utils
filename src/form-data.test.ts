import { expect, describe, test } from 'vitest';
import { parse } from './form-data';

describe('GIVEN getFormData', () => {
  test('WHEN gets formData THEN should return an object with the same values', () => {
    const formData = new FormData();
    formData.append('hej', 'da');
    formData.append('test', 'test2');
    expect(parse(formData)).toEqual({ hej: 'da', test: 'test2' });
  });
});
