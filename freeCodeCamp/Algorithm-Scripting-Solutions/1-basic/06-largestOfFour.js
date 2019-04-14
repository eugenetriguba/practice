// Return an array containing the largest
// numbers from the arrays passed in.
function largestOfFour(arr) {
  var largestArray = [];

  // Loop over each array in arr
  arr.forEach(function(array) {
    // Add the largest element in each array to largestArray
    largestArray.push(Math.max.apply(Math, array));
  });

  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
