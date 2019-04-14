// Confirm whether the ending of str
// ends with target
function confirmEnding(str, target) {
  var startingPoint = str.length - target.length;
  var strEnding = str.substring(startingPoint, str.length);
  return strEnding === target;
}

confirmEnding("Bastian", "n");

/* Can also be solved with .endsWith, but
   it was not allowed. */
// function confirmEnding(str, target) {
//   return str.endsWith(target);
// }
