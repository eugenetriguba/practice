// Remove howMany number of elements
// from the beginning of an array
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
