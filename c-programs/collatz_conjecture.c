/* Finds the collatz conjecture of a positive number inputted
   by the user. User input assumes a non-hostile enviroment. */

#include <stdio.h>
#include <stdlib.h>

int collatz(int n);

int main(void)
{
  // Number should be positive
  unsigned int number;

  // Grab input from user
  printf("Enter a number to get it's collatz conjecture: ");
  scanf("%d", &number);

  // Print out the collatz conjecture
  printf("%i\n", collatz(number));
}

// Find collatz conjecture by utilizing recursion
int collatz(int n)
{
	// base case
	if (n == 1)
		return 0;
	// even numbers
	else if ((n % 2) == 0)
		return 1 + collatz(n / 2);
	// odd numbers
	else
		return 1 + collatz(3 * n + 1);
}
