export function caesarCipher(str, shift) {
  const asciiArray = str.split("").reduce((acc, char) => {
    const shiftedCharCode = char.charCodeAt(0) + shift;
    if (
      shiftedCharCode > 122 ||
      (shiftedCharCode > 90 && shiftedCharCode < 97)
    ) {
      // wrapping
      acc.push(shiftedCharCode - 26);
    } else if (
      char.charCodeAt(0) < 65 ||
      char.charCodeAt(0) > 122 ||
      (char.charCodeAt(0) > 90 && char.charCodeAt(0) < 97)
    ) {
      // dont shift non letters
      acc.push(char.charCodeAt(0));
    } else {
      acc.push(shiftedCharCode);
    }
    return acc;
  }, []);

  return convertAsciiArrayToString(asciiArray);
}

function convertAsciiArrayToString(arr) {
  let str = "";
  arr.forEach((element) => {
    str += String.fromCharCode(element);
  });
  return str;
}
