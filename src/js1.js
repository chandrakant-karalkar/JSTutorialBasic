//Number guessing game - Single line comment
/**
 *  @author - Random JS progammer
 *  - Multi-line comment
 */

function guessNumber(number) {
    var myNumber = 5; // defining a variable and assignment NaN and isNan

    if (number === myNumber) { // strict equal to Operator
        console.log("You Guessed right");
    } else if (number < myNumber) {
        console.log("Try a higer number");
    } else if (number > myNumber) {
        console.log("Try a lower number");
    } else {
        console.log("Error, enter a number!!!!");
    }
}

guessNumber(2);
guessNumber(9);
guessNumber("5");
guessNumber(5);
