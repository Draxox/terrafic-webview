import type { Filters } from "../types";
import { randomIndex } from "./random";

export const PLATE_POSITION_MAP = {
  state: [0, 1],
  rto: [2, 3],
  letter: [4],
  number: [5, 6, 7, 8],
} as const;

export const getActivePlateIndices = (filters: Filters): number[] => {
  return (Object.keys(filters) as (keyof Filters)[])
    .filter((key) => filters[key])
    .flatMap((key) => PLATE_POSITION_MAP[key]);
};

export const pickRandomIndices = (
  indices: number[],
  count: number
): number[] => {
  const pool = [...indices];
  const result: number[] = [];

  while (pool.length && result.length < count) {
    const i = randomIndex(pool.length);
    result.push(pool[i]);
    pool.splice(i, 1);
  }

  return result;
};
