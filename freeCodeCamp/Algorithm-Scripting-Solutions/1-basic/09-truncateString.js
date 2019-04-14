// Truncates a string based on num
function truncateString(str, num) {
  var truncatedString;

  // Give back the original string.
  if (str.length <= num)
    return str;

  // Add 3 dots to the length.
  if (num <= 3) {
    truncatedString = str.slice(0, num);
    return truncatedString + '...';
  }

  // Add 3 dots without adding to the overall length.
  if (str.length > num) {
    truncatedString = str.slice(0, num - 3);
    return truncatedString + '...';
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
