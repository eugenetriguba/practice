// Repeat a string num times.
function repeatStringNumTimes(str, num) {

  // Check if num is negative.
  if (num < 0)
    return '';

  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
