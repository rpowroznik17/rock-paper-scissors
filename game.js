const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

// function game() {
//     let playerPoints = 0;
//     let computerPoints = 0;

//     for (let i = 0; i < 5; i++) {
//         let result = playRound(playerSelection(), computerPlay());

//         console.log(result);

//         if (result.includes("You win")) {
//             playerPoints++;
//         } else if (result.includes("You lose")) {
//             computerPoints++;
//         }
//     }

//     if (playerPoints > computerPoints) {
//         console.log(`Congratulations! You win the game (${playerPoints}:${computerPoints})! `);
//     } else if (computerPoints > playerPoints) {
//         console.log(`You lose the game (${playerPoints}:${computerPoints}) :( Try once more!`);
//     } else {
//         console.log(`Final result is draw! (${playerPoints}:${computerPoints})`);
//     }
// }

function playRound(e) {
    computerSelection = computerPlay();
    playerSelection = e.target.innerText;

    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            console.log("You lose! Paper beats Rock");
        } else if (computerSelection === "SCISSORS") {
            console.log("You win! Rock beats Scissors");
        } else {
            console.log("Draw!");
        }
    }

    if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            console.log("You lose! Scissors beats Paper");
        } else if (computerSelection === "ROCK") {
            console.log("You win! Paper beats Rock");
        } else {
             console.log("Draw!");
        }
    }

    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
             console.log("You lose! Rock beats Scissors");
        } else if (computerSelection === "PAPER") {
            console.log("You win! Scissors beats Paper");
        } else {
             console.log("Draw!");
        }
    }

}

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// const rockBtn = document.querySelector('.rock-btn');
// const paperBtn = document.querySelector('.paper-btn');
// const scissorsBtn = document.querySelector('.scissors-btn');

const choiceButtons = document.querySelectorAll('.choice-btn');
choiceButtons.forEach(btn => btn.addEventListener('click', playRound));

// rockBtn.addEventListener('click', (e) => {
//     console.log(e);
// });

// paperBtn.addEventListener('click', () => {
//     console.log('You chose paper!');
// });

// scissorsBtn.addEventListener('click', () => {
//     console.log('You chose scissors!');
// });

function playerSelection() {
    return prompt('Your choice');
}