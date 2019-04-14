// word1 & word2 can be better variable names.
// I can't seem to think of one currently.

// Take an array of two words and sees if the first
// word has every letter in the second word.
function mutation(arr) {
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();

  // For every letter in word2
  for (var i = 0; i < word2.length; i++) {
    // If there is a letter in word2 that isn't
    // in word1
    if (word1.indexOf(word2[i]) === -1)
      return false;
  }

  return true;
}

mutation(["hello", "hey"]);
