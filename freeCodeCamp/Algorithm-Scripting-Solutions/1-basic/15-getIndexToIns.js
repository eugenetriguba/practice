// Gets the index of where num would be in
// the sorted array
function getIndexToIns(arr, num) {
  // Add num to the array
  arr.push(num);

  // Sort the array
  arr.sort(function(a, b) {
    return a - b;
  });

  // Return the index of num
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
