// Example 1: Callback should run 3 times.
// map([1, 2, 3], function() {
//   console.log('hi');
// });

// Example 2: Callback has access to ith element.
// map(1, 2, 3], function(number) {
//   console.log(number);
// });

// Example 3: Callback has access to index.
// The index of the current element being processing in the array.
// map(1, 2, 3], function(number, index) {
//   console.log(index);
// });

// Example 4: Callback has access to originalArray.
// map(1, 2, 3], function(number, index, originalArray) {
//   console.log(originalArray);
// });

// Example 5: Optional this.
// map([1, 2, 3], function() {
//   console.log(this.name);
// }, {name: 'Greg'})

// Example 6: Callback returns a new array.
// var originalArray = [1, 2, 3];
// var mappedArray = map(originalArray, function() {});
// originalArray !== mappedArray;

// Example 7: Callback changes the value of each element.
// var originalArray = [1, 2, 3];
// var mappedArray = map(originalArray, function(element) {
//   return element * 2;
// });
// Expect mappedArray to be [2, 4, 6]

function map(originalArray, callback, optionalThisObject) {
  var mapCallback = callback;

  if(optionalThisObject) {
    mapCallback = callback.bind(optionalThisObject);
  }

  var mappedArray = [];

  for(var i = 0; i < originalArray.length; i++) {
    if (i in originalArray) {
      var mappedItem = mapCallback(originalArray[i], i, originalArray);
      mappedArray[i] = mappedItem;
    }
  }

  return mappedArray;
}

tests({

  'It should run the callback functions array.length times.': function() {
    var numberOfTimesCallbackHasRun = 0;
    map([1, 2, 3], function() {
      numberOfTimesCallbackHasRun++;
    });
    eq(numberOfTimesCallbackHasRun, 3);
  },

  'It should pass the ith element as the first argument to the callback.': function() {
    map([1], function(number) {
      eq(number, 1);
    });
  },

  'It should pass in the ith position as the second argument to the callback.': function() {
    map([1], function(number, index) {
      eq(index, 0);
    });
  },

  'It should pass in the original array as the third argument to the callback.': function() {
    var testArray = [1, 2, 3];
    map(testArray, function(number, index, originalArray) {
      eq(originalArray, testArray);
    });
  },

  'It should accept an optional this object': function() {
    map([1], function() {
      eq(this.description, 'I should be accessible inside of the callback');
    }, {description: 'I should be accessible inside of the callback'});
  },

  'It should return an array': function() {
    var mappedArray = map([], function () {});
    eq(Array.isArray(mappedArray), true);
  },

  'It should return a new array, not the original array.': function() {
    var originalArray = [];
    var mappedArray = map(originalArray, function () {});
    eq(originalArray !== mappedArray, true);
  },

  'It should return a new array with each element being the result of the callback function': function() {
    var mappedArray = map([1, 2], function(number) {
      return number * 2;
    });
    eq(mappedArray.length === 2, true);
    eq(mappedArray[0] === 2, true);
    eq(mappedArray[1] === 4, true);
  },

  'It should skip missing elements in the array': function() {
    var weirdArray = [, 1];
    var mappedArray = map(weirdArray, function double(number) {
      return number * 2;
    });
    eq(0 in mappedArray === false, true);
    eq(mappedArray[1] === 2, true);
  }

});
