// Find out if a word is a palindrome.
function palindrome(str) {
  // Filter everything except letters & numbers.
  var regexFilter = new RegExp('[^A-Za-z0-9]', 'gi');

  str = str.toLowerCase().replace(regexFilter, '');
  var reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
}

palindrome("EYE,.");
