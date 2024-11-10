import { deepClone } from "./parse-resume-from-pdf/deep-clone";

type Object = { [key: string]: any };

/**
 * Creates an iterator that gradually transforms the `start` object to match the `end` object
 * character by character.
 *
 * start = {a: ""}
 * end = {a: "abc"}
 * const iterator = makeObjectCharIterator(start, end)
 * iterator.next().value = {a: "a"}
 * iterator.next().value = {a: "ab"}
 * iterator.next().value = {a: "abc"}
 * @param start - The initial object to transform
 * @param end - The target object to transform towards
 * @param level - The current recursion level, default is 0
 */
export function* makeObjectCharIterator<T extends Object>(
  start: T,
  end: T,
  level = 0
): Generator<T, void, unknown> {
  const object: Object = level === 0 ? deepClone(start) : start;

  for (const [key, endValue] of Object.entries(end)) {
    if (typeof endValue === "object" && endValue !== null) {
      // Initialize object[key] if it's undefined, to prevent errors during recursion
      if (object[key] === undefined) {
        object[key] = Array.isArray(endValue) ? [] : {};
      }

      const recursiveIterator = makeObjectCharIterator(
        object[key],
        endValue,
        level + 1
      );

      while (true) {
        const next = recursiveIterator.next();
        if (next.done) break;

        yield deepClone(object) as T;
      }
    } else if (typeof endValue === "string") {
      // Incrementally build up each character in the string
      for (let i = 1; i <= endValue.length; i++) {
        object[key] = endValue.slice(0, i);
        yield deepClone(object) as T;
      }
    }
  }
}

/**
 * Counts the total number of characters across all string properties
 * within an object, including nested properties.
 * @param object - The object whose characters to count
 * @returns The total count of characters
 */
export const countObjectChar = (object: Object): number => {
  let count = 0;
  for (const value of Object.values(object)) {
    if (typeof value === "object" && value !== null) {
      count += countObjectChar(value);  // Recursive count for nested objects
    } else if (typeof value === "string") {
      count += value.length;
    }
  }
  return count;
};
