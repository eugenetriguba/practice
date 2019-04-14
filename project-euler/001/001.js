function sumOfMultiples(firstNum, secondNum, upperBound) {
    var i, sum = 0;

    // While i is less than upperBound
    for (i = 0; i < upperBound; i++) {

        // If firstNum or secondNum is a multiple of it,
        // add it to sum.
        if (i % firstNum === 0 || i % secondNum === 0)
            sum += i;
    }

    return sum;
}

console.log(sumOfMultiples(3, 5, 1000)); // 233,168
