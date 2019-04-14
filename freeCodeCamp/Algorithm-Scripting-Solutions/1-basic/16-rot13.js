// Decrypt a rot13 encrypted message..
function rot13(str) { // LBH QVQ VG!
  var decryptedStr = '';

  // Loop over each letter in the string.
  for (var i = 0; i < str.length; i++) {
      var letter = str[i];
      decryptedStr += decryptLetter(letter);
  }

  return decryptedStr;

}

// Decrypts a rot13 encrypted letter.
function decryptLetter(letter) {
  var key = 13;
  var isLetter = letter.search(/[^A-Za-z]+/g) === -1;

  // If what is passed in is a letter.
  if (isLetter) {
    // Grab the char code.
    var letterCharCode = letter.charCodeAt(0);

    // Decrypt the letter.
    letterCharCode -= 65;
    letterCharCode += key;
    letterCharCode %= 26;
    letterCharCode += 65;

    // Return the decrypted letter.
    return String.fromCharCode(letterCharCode);
  }

  // If not a letter, return it back.
  return letter;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
