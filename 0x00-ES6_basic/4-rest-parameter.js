export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  for (let arg of theArgs) {
    total += 1;
  }
  return total;
}
