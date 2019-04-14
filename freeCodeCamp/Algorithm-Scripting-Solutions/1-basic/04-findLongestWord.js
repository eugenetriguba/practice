// Find the longest word in a sentence
// and return the length.
function findLongestWord(str) {
  var longestWord = 0;
  str = str.split(' ');

  str.forEach(function(word){
    if (word.length > longestWord)
      longest = word.length;
  });

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
