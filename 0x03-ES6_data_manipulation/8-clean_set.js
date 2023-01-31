/**
 * Return a string of all set values that start with a specific string
 * @param {Set<String>} set - the input set
 * @param {String} startString - the input string
 *
 * @returns {String}
 */

export default function cleanSet() {
  const parts = [];
  if (
    !set ||
    !startString ||
    !(set instanceof Set) ||
    typeof startString !== 'string'
  ) {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
