export const toLower = (str?: string | null): string => (isNullOrEmpty(str) ? '' : str.toLowerCase());
export const removeAllWhiteSpace = (str?: string | null): string => (isNullOrEmpty(str) ? '' : str.replace(/\s+/g, ''));

export const toBool = (str?: string | null): boolean => {
  if (isNullOrEmpty(str)) {
    return false;
  }
  const num = +str;
  return !isNaN(num) ? !!num : str.toLowerCase() === 'true';
};

export const subString = (str: string | undefined | null, length: number, endChars = '...'): string => {
  if (isNullOrEmpty(str)) {
    return '';
  }
  if (!length) {
    return str;
  }
  if (str.length <= length) {
    return str;
  }
  return `${str.substring(0, length)}${endChars}`;
};

export const isNullOrEmpty = (str?: string | null): str is undefined | null | '' => {
  if (!str) {
    return true;
  }
  const trimmed = str.trim();
  return trimmed === '';
};

export const escapeRegExp = (str?: string | null): string =>
  isNullOrEmpty(str) ? '' : str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const replaceAll = (str: string | null | undefined, find: string, replace: string): string =>
  isNullOrEmpty(str) ? '' : str.replace(new RegExp(escapeRegExp(find), 'g'), replace);

export const toUpper = (str?: string | null): string => (isNullOrEmpty(str) ? '' : str.toUpperCase());

export const toCapitalize = (str?: string | null): Capitalize<string> =>
  isNullOrEmpty(str) ? '' : (`${str.charAt(0).toUpperCase()}${str.slice(1)}` as Capitalize<string>);

export const toCamelCase = (str?: string | null) => {
  if (isNullOrEmpty(str)) {
    return '';
  }
  return str.replace(/^([A-Z])|\s(\w)/g, (match, p1, p2) => (p2 ? p2.toUpperCase() : p1.toLowerCase()));
};
