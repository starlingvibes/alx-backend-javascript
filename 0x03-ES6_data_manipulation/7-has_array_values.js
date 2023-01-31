/**
 * Check if all elements in the array exist in the set
 * @param {Set} set - the input set
 * @param {Array} array - the input array.
 * @returns {boolean}
 */

export default function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
