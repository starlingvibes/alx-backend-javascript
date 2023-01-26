export default function appendToEachArrayValue(array, appendString) {
  let newarray = [];
  for (var idx of array) {
    newarray.push(appendString + idx);
  }

  return newarray;
}
