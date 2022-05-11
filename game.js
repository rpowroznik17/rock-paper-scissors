const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerPlay(), computerPlay());

        console.log(result);

        if (result.includes("You win")) {
            playerPoints++;
        } else if (result.includes("You lose")) {
            computerPoints++;
        }
    }

    if (playerPoints > computerPoints) {
        console.log(`Congratulations! You win the game (${playerPoints}:${computerPoints})! `);
    } else if (computerPoints > playerPoints) {
        console.log(`You lose the game (${playerPoints}:${computerPoints}) :( Try once more!`);
    } else {
        console.log(`Final result is draw! (${playerPoints}:${computerPoints})`);
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

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
            return "You lose! Rock beats Scissors";
        } else if (computerSelection === "PAPER") {
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