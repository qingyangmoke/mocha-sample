export default function subtract(...rest) {
  if (rest.length == 0) throw new Error("arguments should not empty");
  return rest.reduce((item1, item2) => item1 - item2);
}