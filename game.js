const CHOICES = ["ROCK", "PAPER", "SCISSORS"];



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            return "You lose! Paper beats Rock";
        } else if (computerSelection === "SCISSORS") {
            return "You win! Rock beats Scissors";
        } else {
            return "Draw!"
        }
    }

    if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return "You lose! Scissors beats Paper";
        } else if (computerSelection === "ROCK") {
            return "You win! Paper beats Rock";
        } else {
            return "Draw!"
        }
    }

    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            return "You lose! Rock beats Paper";
        } else if (computerSelection === "Paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "Draw!"
        }
    }

}

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playerPlay() {
    return prompt("Rock, paper or scissors: ");
}

function test() {
    for (let i = 0; i < 3; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
    }
}
