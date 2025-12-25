import type { StateCode } from "../types";

export const randomIndex = (length: number) =>
  Math.floor(Math.random() * length);
// random digits from 1-9
export const randomDigits = (length: number): number[] => {
  return Array.from({ length }, () => Math.floor(Math.random() * 9) + 1);
};
//random single char from A-Z
export const randomChars = (chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"): string => {
  return chars[randomIndex(chars.length)];
};
// random state codes
export const randomCodes = (codes: StateCode[]): StateCode => {
  return codes[randomIndex(codes.length)];
};
