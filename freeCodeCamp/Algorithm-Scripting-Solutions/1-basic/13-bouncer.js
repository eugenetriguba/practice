// Remove falsy values from an array
function bouncer(arr) {
  var filteredArray = arr.filter(function(item){
    // false items will become true, which
    // will then return false, filtering them out.
    if (!item)
      return false;
    else
      return true;
  });

  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
