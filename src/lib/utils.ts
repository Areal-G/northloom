import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compareArrays = <T>(a: readonly T[], b: readonly T[]): boolean =>
  a.length === b.length && a.every((value, i) => value === b[i]);
