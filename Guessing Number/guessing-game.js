let randNum = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

submit.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = Number(guess.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Invalid input: Please input a number between 1 and 10.");
    return; 
  }
  
  attempts++;

  if (userGuess === randNum) {
    hint.textContent = "Congratulations, you guessed it!";
  } else if (userGuess < randNum) {
    hint.textContent = "Too low! Try again.";
  } else {
    hint.textContent = "Too high! Try again.";
  }

  attemptsText.textContent = attempts;
}
