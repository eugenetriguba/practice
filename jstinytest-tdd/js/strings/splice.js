// Extracts a sections of a string and returns a new string.

// Syntax:
  // str.splice(beginSplice[, endSplice])
  // splice(str, beginSplice[, endSplice])

// Parameters
  // beginSplice:
    // Zero-based index for where to begin extraction.
    // If negative, length of the string + beginSplice.
    // If greater than or equal to the length of the string, return an empty string.

  // endSplice:
    // Optional.
    // Zero-based index for where to end extraction.
    // If omitted, splice should extract to the end of the string.
    // If negative, length of the string + endSplice.

// Return value:
  // A new string containing the extracted section of the string.

// Description:
  // Splice extracts the text from one string and returns a new string. Changes to the text should not affect the other string.
  // Splice extracts up to but not included endSplice.

// Prototype function:
// function splice(originalString, beginSplice, endSplice) {
//   var endOfSplice = originalString.length;
//   var splicedString = '';
//
//   // If endSplice is provided
//   if(endSplice) {
//     endOfSplice = endSplice;
//   }
//
//   for(var i = beginSplice; i < endOfSplice; i++) {
//     splicedString += originalString[i];
//   }
//
//   return splicedString;
// }

// Requirements:
  // It should run beginSplice - endSplice times.
  // It should begin splicing at beginSplice.
  // If endSplice is provided, it should go up to, but not at, endSplice.
  // If endSplice is not provided, splice to the end of the string.
  // It should return the correct spliced string.
  // It should return a new string, not the original string.
  // If beginSplice is greater than or equal to the length of the string, return an empty string.
  // If beginSplice is negative, set beginSplice to length of the string + beginSplice.
  // If endSplice is negative, set endSplice to length of the string + endSplice.

function splice(originalString, beginSplice, endSplice) {
  var originalStringLength = originalString.length
  var endOfSplice = originalStringLength;
  var splicedString = '';

  // Return an empty string if beginSplice is
  // greater than the string length.
  if(beginSplice > originalStringLength) {
    return '';
  }

  // set beginSplice to str.length + beginSplice if
  // beginSplice is negative
  if(beginSplice < 0) {
    beginSplice = originalStringLength + beginSplice;
  }

  // Make endSpice optional
  if(endSplice) {
    endOfSplice = endSplice;

    // set endSplice to str.length + endSplice if
    // endSplice is negative
    if(endSplice < 0) {
      endOfSplice = originalStringLength + endSplice;
    }
  }

  // Loop through each char in string between beginSplice
  // and endOfSplice, adding it to a new string.
  for(var i = beginSplice; i < endOfSplice; i++) {
    splicedString += originalString[i];
  }

   return splicedString;
}

tests({
  'It should run endSplice - beginSplice times': function() {
    var exampleStringLength = 'Example string'.length;
    var splicedString = splice('Example string', 0, 14);
    eq(splicedString.length, exampleStringLength);
  },

  'It should begin splicing at beginSplice': function() {
    var exampleStringLength = 'Example string'.length;
    var splicedString = splice('Example string', 1);
    eq(splicedString, 'xample string');
    eq(splicedString.length, exampleStringLength - 1);
  },

  'If endSplice is provided, it should go up to, but not at, endSplice': function() {
    var splicedString = splice('Example string', 0, 2);
    eq(splicedString, 'Ex');
    eq(splicedString.length, 2);
  },

  'If endSplice is not provided, splice to the end of the string': function() {
    var exampleStringLength = 'Example string'.length;
    var splicedString = splice('Example string', 0);
    eq(splicedString, 'Example string');
    eq(splicedString.length, exampleStringLength);
  },

  'It should return the correct spliced string': function() {
    var splicedString = splice('Example string', 0);
    eq(splicedString, 'Example string');
  },

  'It should return a new string, not an altered version of the original string': function() {
    // I can't seem to figure this out, or if even possible, since primitive values are pass by value, not reference.
  },

  'If beginSplice is greater than or equal to the length of the string, return an empty string': function() {
    var exampleStringLength = 'Example string'.length;
    var splicedString = splice('Example string', exampleStringLength + 1);
    eq(splicedString, '');
  },

  'If beginSplice is negative, set beginSplice to length of the string + beginSplice': function() {
    var splicedString = splice('Example string', -1);
    eq(splicedString, 'g');
  },

  'If endSplice is negative, set endSplice to length of the string + endSplice': function() {
    var splicedString = splice('Example string', 0, -1);
    eq(splicedString, 'Example strin');
  }

});
