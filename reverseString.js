export function reverseString(str) {
  if (str.length === 0 || typeof str !== "string") return "";

  const reversedString = str
    .split("")
    .reduce((accumulator, letter) => letter + accumulator, "");
  return reversedString;
}
