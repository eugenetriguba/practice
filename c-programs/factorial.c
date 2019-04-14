/* Gets the factorial of a positive number inputted by the
   user. User input assumes a non-hostile enviroment. */

#include <stdio.h>

int factorial(int n);

int main(void)
{
  // Number should be positive
  unsigned int number;

  // Grab input from user
  printf("Enter a number to get it's factorial: ");
  scanf("%d", &number);

  // Print out the factorial
  printf("%i\n", factorial(number));
}

// Find factorial by utilizing recursion
int factorial(int number)
{
  if (number == 1)
    return 1;
  else
    return number * factorial(number - 1);
}
