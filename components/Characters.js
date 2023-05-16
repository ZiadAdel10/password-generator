// export const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
// export const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// export const numberCharacters = "0123456789";
// export const symbolCharacters = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;

// Lowercase letters
export let lowercaseCharacters = "";
for (let i = 97; i <= 122; i++) {
  lowercaseCharacters += String.fromCharCode(i);
}

// Uppercase letters
export let uppercaseCharacters = "";
for (let i = 65; i <= 90; i++) {
  uppercaseCharacters += String.fromCharCode(i);
}

// Numbers
export let numberCharacters = "";
for (let i = 48; i <= 57; i++) {
  numberCharacters += String.fromCharCode(i);
}

// Symbols
export let symbolCharacters = "";
for (let i = 33; i <= 126; i++) {
  if (
    (i >= 48 && i <= 57) || // Exclude numbers
    (i >= 65 && i <= 90) || // Exclude uppercase letters
    (i >= 97 && i <= 122) // Exclude lowercase letters
  ) {
    continue;
  }
  symbolCharacters += String.fromCharCode(i);
}
