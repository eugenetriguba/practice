// Prototype implementation:
  // function reduce(array, callback, startingValue) {
  //   var resultSoFar = startingValue;
  //   for (var i = 0; i < array.length; i++) {
  //     resultSoFar = callback(resultSoFar, array[i], i, array);
  //   }
  //   return resultSoFar;
  // }

// Callback parameters:
  // previousValue
  // currentValue
  // currentIndex
  // array

// Return value:
  // Returns a single value.

// Function requirements:

  // If initialValue is provided, previousValue should start with initialValue.
  // If initialValue is provided, currentValue should start with array[0].
  // If initialValue is provided, callback will start at index 0 (first element).

  // If no initialValue is provided, previousValue should start with array[0].
  // If no initialValue is provided, currentValue should start with array[1].
  // If no initialValue is provided, callback will start at index 1 (second element).

  // If initialValue is provided, and array is empty, return initialValue without calling the callback.
  // If no initialValue is provided, and array has one element, it should return that element without calling the callback.

  // It should reduce the elements into a single value.
  // It should exclude missing values in the array (e.g. [, 1])
  // It should pass array as fourth argument to callback.
  // If array is empty, and no initialValue, throw a TypeError.

  function reduce(array, callback, initialValue) {
    var startingIndex = 0;
    var resultSoFar = initialValue;
    var length = array.length;
    var arrayIndexes = Object.keys(array);

    // Detects if no initialValue
    if(arguments.length < 3) {
      // Array is empty, throw TypeError
      if(arrayIndexes.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }

      // If array has one element, just return it.
      if(arrayIndexes.length === 1) {
        var onlyIndex = arrayIndexes[0];
        var onlyElement = array[onlyIndex];
        return onlyElement;
      }

      // We want to skip holes at the beginning of the array.
      while(startingIndex in array === false && startingIndex < length) {
        startingIndex++;
      }

      resultSoFar = array[startingIndex];
      startingIndex++;

      // Checks if there is an empty array AND an initialValue
    } else if(arrayIndexes.length === 0) {
      return initialValue;
    }

    for(var i = startingIndex; i < length; i++) {
      if (i in array) {
        resultSoFar = callback(resultSoFar, array[i], i, array);
      }
    }

    return resultSoFar;
  }

tests({

  'If initialValue is provided, callback should run array.length times': function() {
    var numberOfTimesCallbackHasRun = 0;
    reduce([1, 2], function() {
      numberOfTimesCallbackHasRun++;
    }, 0);
    eq(numberOfTimesCallbackHasRun, 2);
  },
  'If no initialValue is provided, callback should run array.length - 1 times': function() {
    var numberOfTimesCallbackHasRun = 0;
    reduce([1, 2], function() {
      numberOfTimesCallbackHasRun++;
    });
    eq(numberOfTimesCallbackHasRun, 1);
  },

  'If initialValue is provided, previousValue should start with initialValue': function() {
    reduce([1], function(previousValue) {
      eq(previousValue, 0);
    }, 0);
  },
  'If initialValue is provided, currentValue should start with array[0]': function() {
    reduce([1], function(previousValue, currentValue) {
      eq(currentValue, 1);
    }, 0);
  },
  'If initialValue is provided, callback will start at index 0 (first element)': function() {
    reduce([1], function(previousValue, currentValue, currentIndex) {
      eq(currentIndex, 0);
    }, 0);
  },

  'If no initialValue is provided, previousValue should start with array[0]': function() {
    reduce([1, 2], function(previousValue) {
      eq(previousValue, 1);
    });
  },
  'If no initialValue is provided, currentValue should start with array[1]': function() {
    reduce([1, 2], function(previousValue, currentValue) {
      eq(currentValue, 2);
    });
  },
  'If no initialValue is provided, callback will start at index 1 (second element)': function() {
    reduce([1, 2], function(previousValue, currentValue, currentIndex) {
      eq(currentIndex, 1);
    });
  },

  'If initialValue is provided, and array is empty, return initialValue without calling the callback': function() {
    var numberOfTimesCallbackHasRun = 0;
    var initialValue = 0;
    var reduceResult = reduce([,,,], function() {
      numberOfTimesCallbackHasRun++;
    }, initialValue);

    eq(reduceResult, initialValue);
    eq(numberOfTimesCallbackHasRun, 0);
  },
  'If no initialValue is provided, and array has one element, it should return that element without calling the callback': function() {
    var numberOfTimesCallbackHasRun = 0;
    var reduceResult = reduce([1], function() {
      numberOfTimesCallbackHasRun++;
    });
    eq(reduceResult, 1);
    eq(numberOfTimesCallbackHasRun, 0);
  },

  'It should reduce the elements into a single value': function() {
    var sum = reduce([1, 2,, 3,], function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    eq(sum, 6);
  },
  'It should pass array as fourth argument to callback': function() {
    var testArray = [1, 2, 3];
    reduce(testArray, function(previousValue, currentValue, currentIndex, arrayToReduce) {
      eq(arrayToReduce === testArray, true)
    }, 0);
  },
  'If initialValue is provided, it should exclude missing values in the array': function() {
    var sum = reduce([, 1, 2, 3], function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    eq(sum, 6);
  },
  'If no initialValue is provided, it should exclude missing values in the array': function() {
    var sum = reduce([, 1, 2, 3], function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
    eq(sum, 6);
  },
  'If array is empty, and no initialValue, throw a TypeError': function() {
    var isTypeError = false;
    try {
      reduce([], function() {});
    } catch(e) {
      var isTypeError = (e instanceof TypeError);
    }
    eq(isTypeError, true);
  }

});
