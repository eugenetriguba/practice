// Find the factorial of a number utilizing recursion.
function factorialize(num) {
  if (num <= 1)
    return 1;
  else
    return num * factorialize(num - 1);
}

factorialize(5);
