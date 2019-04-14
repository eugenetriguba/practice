function fibSumOfEvens(upperBound) {
    var i, sumOfEvens = 2;
    var fibArray = [1, 2];
    var sumOfLastTwo = 3;

    // i starts on second iteration of fib
    // While sumOfLastTwo doesn't exceed upperBound
    for (i = 2; sumOfLastTwo < upperBound; i++) {

        // Add the value of sumOfLastTwo to fibArray
        // from previous iteration
        fibArray.push(sumOfLastTwo);

        // If sumOfLastTwo is even, add it to the
        // running total (sumOfEvens).
        if (sumOfLastTwo % 2 === 0)
            sumOfEvens += sumOfLastTwo;

        // Find the sum of the last two numbers.
        sumOfLastTwo = fibArray[i] + fibArray[i - 1];
    }

    return sumOfEvens;
}

console.log(fibSumOfEvens(4000000)); // 4,613,732

/*
    I add the value from the previous iteration because if we compute the value, then add it into the array, the sumOfLastTwo will be bigger than upperBound.

    This is because it won't have been checked yet before being added in.
*/
