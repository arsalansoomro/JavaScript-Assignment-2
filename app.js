
var secretnumber = Math.floor(Math.random() * 10) + 1;
var userGuess = Number(prompt("Guess Any Number Between 1 to 10!"));

// Check if the user input is completely blank or not a valid number between 1 and 10
if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Please enter a valid number between 1 and 10 next time!");
    document.write("Invalid input provided.");
} 
// If the guess matches perfectly
else if (userGuess === secretnumber) {
    alert("Correct answer You Won 7Crore");
    document.write("<h3>Congratulations Bhaiya Aap 7Crore Jeet Gaye</h3>");
    document.write("Secret Number: " + secretnumber + "<br>");
    document.write("Your Guess: " + userGuess + "<br>");
} 
// If the guess is wrong
else {
    alert("Better Luck For Next Time.");
    document.write("<h3>Game Over!</h3>");
    document.write("The secret number was: <strong>" + secretnumber + "</strong><br>");
    document.write("Your guess was: <strong>" + userGuess + "</strong><br>");
}