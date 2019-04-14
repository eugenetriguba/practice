// Return a string with each word's
// first letter capitalized
function titleCase(str) {
  str = str.split(' ');

  str.forEach(function(word, position) {
    var firstLetter = word.charAt(0).toUpperCase();
    var restOfWord = word.substring(1).toLowerCase();
    str[position] = firstLetter + restOfWord;
  });

  str = str.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
