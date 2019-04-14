// Chunk arr in groups of size forming a 2-d array
// These is probably a more elegant solution here.
function chunkArrayInGroups(arr, size) {
  // The array we're returning
  var chunkedArr = [];
  // The chunks being pushed into the array
  var tempArr = [];


  arr.forEach(function(item, position, array){
    tempArr.push(item);

    // When tempArr is chunked of length size,
    // push it into chunkedArr and reset it.
    if (tempArr.length === size) {
      chunkedArr.push(tempArr);
      tempArr = [];
    }

    // If it is the last iteration and tempArr
    // is not empty, push it into chunkedArr.
    if (position === array.length - 1 && tempArr.length !== 0)
      chunkedArr.push(tempArr);
  });

  return chunkedArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
