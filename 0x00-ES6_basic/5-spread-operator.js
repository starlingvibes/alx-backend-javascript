export default function concatArrays(array1, array2, string) {
  let x = string.split('');
  let res = [...array1, ...array2, ...x];
  return res;
}
