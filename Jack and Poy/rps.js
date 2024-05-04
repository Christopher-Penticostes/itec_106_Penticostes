const option = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultDisplay = document.getElementById("resultDisplay");

function play(playerChose){

	const computerChose = option[Math.floor(Math.random() * 3)];
	let result = "";

	if (playerChose === computerChose){
		result = "IT'S A TIE!";
	}else{
		switch(playerChose){
			case "rock":
				result = (computerChose === "scissors") ? "YOU WIN!" : "YOU LOSE!";
				break;
			case "paper":
				result = (computerChose === "rock") ? "YOU WIN!" : "YOU LOSE!";
				break;
			case "scissors":
				result = (computerChose === "paper") ? "YOU WIN!" : "YOU LOSE!";
				break;
		}
	}

	player.textContent = `PLAYER: ${playerChose}`;
	computer.textContent = `COMPUTER: ${computerChose}`;
	resultDisplay.textContent = result;

	if (result === "YOU WIN!") {
		resultDisplay.classList.remove("lose");
		resultDisplay.classList.add("win");
	} 
	else if (result === "IT'S A TIE!") {
		resultDisplay.classList.remove("lose");
		resultDisplay.classList.remove("win");
	}else {
		resultDisplay.classList.remove("win");
		resultDisplay.classList.add("lose");
	}
}
