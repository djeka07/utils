import { KeyShift, KeyWithCode, KeyWithKey } from "./keyboard.types";

export const isEnterWithoutShift = (event: KeyWithKey & KeyShift): boolean => isEnter(event) && !isShiftKey(event);
export const isEnterWithShift = (event: KeyWithKey & KeyShift): boolean => isEnter(event) && isShiftKey(event);
export const isEnter = (event: KeyWithKey): boolean => event.key === 'Enter';
export const isShiftKey = (event: KeyShift): boolean => event.shiftKey;
export const isSpace = (event: KeyWithCode): boolean => event.code === 'Space';
export const isBackSpace = (event: KeyWithKey) => event.key === 'Backspace';
export const isEscape = (event: KeyWithKey) => event.key === 'Escape';
