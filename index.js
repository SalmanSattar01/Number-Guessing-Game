#! /usr/bin/env node
import inquirer from "inquirer";
// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to start the game
function startGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const secretNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;
    console.log("\tWelcome to the Number Guessing Game!");
    console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}. Can you guess it?`);
    // Function to prompt the user for their guess
    function promptGuess() {
        inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: 'Enter your guess:',
            validate: (input) => {
                const guess = parseInt(input);
                if (isNaN(guess)) {
                    return 'Please enter a valid number.';
                }
                else {
                    attempts++;
                    if (guess < secretNumber) {
                        console.log(` is Too low! Try again.`);
                        return false;
                    }
                    else if (guess > secretNumber) {
                        console.log(` is Too high! Try again.`);
                        return false;
                    }
                    else {
                        console.log(` Congratulations! You guessed the number ${secretNumber} correctly in ${attempts} attempts.`);
                        return true;
                    }
                    // End the game
                }
            }
        }).then(({ guess }) => {
            if (!isNaN(parseInt(guess))) {
                if (parseInt(guess) === secretNumber) {
                    console.log(`\tThanks for playing Number Guessing Game`); // End the game if the correct guess was made
                }
                else {
                    console.log(); // Ask for the next guess if a valid guess was provided
                }
            }
        });
    }
    // Start the game by asking for the first guess
    promptGuess();
}
// Start the game
startGame();