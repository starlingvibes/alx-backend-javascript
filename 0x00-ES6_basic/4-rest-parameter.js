export default function returnHowManyArguments(...theArgs) {
  let arr = [];
  for (let arg of theArgs) {
    arr.push(arg);
  }
  return arr.length;
}
