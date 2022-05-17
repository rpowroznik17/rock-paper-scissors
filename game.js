const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

const mainContainer = document.querySelector('.main');
const resultMessage = document.querySelector('.result-message');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playerChoiceBox = document.querySelector('#playerChoice');
const computerChoiceBox = document.querySelector('#computerChoice');

let playerPoints = 0;
let computerPoints = 0; 

const choiceButtons = document.querySelectorAll('.choice-btn');
choiceButtons.forEach(btn => btn.addEventListener('click', playRound));

function playRound(e) {
    computerSelection = computerPlay();
    playerSelection = e.target.innerText;
    updateChoiceWindow(playerSelection, playerChoiceBox);
    updateChoiceWindow(computerSelection, computerChoiceBox);
    const result = determineWinnerOfRound(playerSelection, computerSelection);
    resultMessage.textContent = result;
    addScores(result);
    if (playerPoints === 5 || computerPoints === 5){
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play again!';
        playAgainButton.classList.add('play-again-btn');
        mainContainer.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', () => {
            document.location.reload();
        });
        choiceButtons.forEach(btn => btn.removeEventListener('click', playRound));
    }
}

function updateChoiceWindow(selection, choiceBox) {
    let previousChoice;
    let currentChoice;
    
    if (selection === "ROCK") {
        currentChoice = 'rock-btn';
    } else if (selection === "PAPER") {
        currentChoice = 'paper-btn';
    } else {
        currentChoice = 'scissors-btn';
    }

    if (choiceBox.classList.length === 1) {
        choiceBox.classList.add(currentChoice);
    } else {
        previousChoice = choiceBox.classList[1];
        choiceBox.classList.replace(previousChoice, currentChoice);
    }
}

function addScores(result) {
    if (result.includes('You win!')) {
        playerPoints++;
        playerScore.textContent = `Player score: ${playerPoints}`;
    }
    if (result.includes('You lose!')) {
        computerPoints++;
        computerScore.textContent = `Computer score: ${computerPoints}`;
    }
}

function determineWinnerOfRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            return 'You lose! Paper beats Rock';
            // console.log("You lose! Paper beats Rock");
        } else if (computerSelection === "SCISSORS") {
            return 'You win! Rock beats Scissors';
        } else {
            return 'Draw!';
        }
    }

    if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return 'You lose! Scissors beats Paper';
        } else if (computerSelection === "ROCK") {
            return 'You win! Paper beats Rock';
        } else {
             return 'Draw!';
        }
    }

    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
             return 'You lose! Rock beats Scissors';
        } else if (computerSelection === "PAPER") {
            return 'You win! Scissors beats Paper';
        } else {
             return 'Draw!';
        }
    }
}

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}