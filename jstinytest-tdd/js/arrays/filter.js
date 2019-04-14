// Example 1:
// filter([1, 2, 3], function() {
//   console.log('hi');
// });

// Example 2:
// filter(1, 2, 3], function(number) {
//   console.log(number);
// });

// Example 3:
// The index of the current element being processing in the array.
// filter(1, 2, 3], function(number, index) {
//   console.log(index);
// });

// Example 4:
// filter(1, 2, 3], function(number, index, originalArray) {
//   console.log(originalArray);
// });

// Example 5:
// filter([1, 2, 3], function() {
//   console.log(this.name);
// }, {name: 'Greg'})

// Example 6:
// var testArray = [1, 2, 3];
// var filteredArray = filter(testArray, function() {});
// testArray !== filteredArray;

// Example 7:
// var testArray = [1, 2, 3];
// var filteredArray = filter(testArray, function(element) {
//   return element > 1;
// });
// Expect filteredArray to be [2, 3]

function filter(originalArray, callback, optionalThisObject) {
  var filterCallback = callback;
  if (optionalThisObject) {
    filterCallback = callback.bind(optionalThisObject);
  }

  var filteredArray = [];

  for(var i = 0; i < originalArray.length; i++) {
    if (filterCallback(originalArray[i], i, originalArray)) {
      filteredArray.push(originalArray[i]);
    }
  }

  return filteredArray;
}

tests({

  'It should run the callback functions array.length times.': function() {
    var numberOfTimesCallbackHasRun = 0;
    filter([1, 2, 3], function() {
      numberOfTimesCallbackHasRun++;
    });
    eq(numberOfTimesCallbackHasRun, 3);

  },

  'It should pass the ith element as the first argument to the callback.': function() {
    filter([1], function(number) {
      eq(number, 1);
    });
  },

  'It should pass in the ith position as the second argument to the callback.': function() {
    filter([1], function(number, index) {
      eq(index, 0);
    });
  },

  'It should pass in the original array as the third argument to the callback.': function() {
    var testArray = [1, 2, 3];
    filter(testArray, function(number, index, originalArray) {
      eq(originalArray, testArray);
    });
  },

  'It should accept an optional this object': function() {
    filter([1], function() {
      eq(this.description, 'I should be accessible inside of the callback');
    }, {description: 'I should be accessible inside of the callback'});
  },

  'It should return an array': function() {
    var filteredArray = filter([], function () {});
    eq(Array.isArray(filteredArray), true);
  },

  'It should return a new array, not the array being filtered.': function() {
    var arrayBeingFiltered = [];
    var filteredArray = filter(arrayBeingFiltered, function () {});
    eq(arrayBeingFiltered !== filteredArray, true);
  },

  'It should return a new array that only has elements where callback() returns true.': function() {
    var filteredArray = filter([1 ,2], function(number) {
      return number > 1;
    });
    eq(filteredArray.length, 1);
    eq(filteredArray[0], 2);
  }

});
