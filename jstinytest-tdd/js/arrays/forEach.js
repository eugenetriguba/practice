// Example 1:
// forEach([1, 2, 3], function() {
//   console.log('hi');
// });

// Example 2:
// forEach(1, 2, 3], function(number) {
//   console.log(number);
// });

// Example 3:
// The index of the current element being processing in the array.
// forEach(1, 2, 3], function(number, index) {
//   console.log(index);
// });

// Example 4:
// forEach(1, 2, 3], function(number, index, originalArray) {
//   console.log(originalArray);
// });

// Example 5:
// forEach([1, 2, 3], function() {
//   console.log(this.name);
// }, {name: 'Greg'})

function forEach(array, callback, optionalThisObject) {
  var forEachCallback = callback;

  if(optionalThisObject) {
    forEachCallback = callback.bind(optionalThisObject);
  }

  for(var i = 0; i < array.length; i++) {
    forEachCallback(array[i], i, array);
  }
}

tests({

  'It should run the callback functions array.length times.': function() {
    var numberOfTimesCallbackHasRun = 0;

    forEach([1, 2, 3], function() {
      numberOfTimesCallbackHasRun++;
    });

    eq(numberOfTimesCallbackHasRun, 3);
  },

  'It should pass the ith element as the first argument to the callback.': function() {
    forEach([1], function(number) {
      eq(number, 1);
    });
  },

  'It should pass in the ith position as the second argument to the callback.': function() {
    forEach([1], function(number, index) {
      eq(index, 0);
    });
  },

  'It should pass in the original array as the third argument to the callback.': function() {
    var testArray = [1, 2, 3];
    forEach(testArray, function(number, index, originalArray) {
      eq(originalArray, testArray);
    });
  },

  'It should accept an optional this object': function() {
    forEach([1], function() {
      eq(this.description, 'I should be accessible inside of the callback');
    }, {description: 'I should be accessible inside of the callback'});
  }

});
