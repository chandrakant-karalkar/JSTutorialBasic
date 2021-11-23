// This is a single line commenent
/**
 * @author - Some User
 * bla bla bla
 */
console.log("Please call Guess Number Function using any number from 1-10");

function guessNumber(myNumber) {
    var numerToGuess = 5;
    var myString = 'test';
    var myString1 = "test";
    var myArray = ["str1", "str2"];
    if (myNumber === numerToGuess) { // strict equal
        console.log("Congratulations you guessed right!!!");
    } else if (myNumber < 5) {
        console.log("Please try with a higher number");
    }else if(myNumber > 5){
        console.log("Please try with a lower number");
    } else {
        console.log("Error: Please call the method with a number");
    }
}

guessNumber(2);
guessNumber(8);
guessNumber(5);
guessNumber("5");
