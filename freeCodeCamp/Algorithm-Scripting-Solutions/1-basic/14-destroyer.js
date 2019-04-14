// Removes all elements from an array that are
// the same as the values you provided.
function destroyer(arr) {
  // Turn arguments into a real array
  var args = Array.prototype.slice.call(arguments);

  arr = arr.filter(function(item) {
    // Loop over args, except the array.
    for (var i = 1; i < args.length; i++) {
      // If args matches the item in the array
      if (args[i] === item)
        // Discard it
        return false;
    }

    // Else add it to the array
    return true;
  });

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
