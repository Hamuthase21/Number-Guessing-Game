// Variables to store the game state
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let numberOfAttempts = 0;
let guessedCorrectly = false;

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const feedback = document.getElementById("feedback");
    const attempts = document.getElementById("attempts");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100!";
        feedback.style.color = "red";
        return;
    }

    numberOfAttempts++;
    
    if (userGuess < numberToGuess) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = "orange";
    } else if (userGuess > numberToGuess) {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Congratulations! You guessed the correct number!";
        feedback.style.color = "green";
        attempts.textContent = "It took you " + numberOfAttempts + " attempts.";
        guessedCorrectly = true;
        document.getElementById("restartButton").style.display = "inline-block"; // Show the Play Again button
    }

    attempts.textContent = "Attempts: " + numberOfAttempts;
}

// Function to restart the game
function restartGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    numberOfAttempts = 0;
    guessedCorrectly = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("restartButton").style.display = "none"; // Hide the Play Again button
}
