export default function concatArrays(array1, array2, string) {
  let res = [...array1, ...array2, ...string.split('')];
  return res;
}
