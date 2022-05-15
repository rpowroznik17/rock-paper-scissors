const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

const resultMessage = document.querySelector('.result-message');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const mainContainer = document.querySelector('.main');
let playerPoints = 0;
let computerPoints = 0; 

const choiceButtons = document.querySelectorAll('.choice-btn');
choiceButtons.forEach(btn => btn.addEventListener('click', playRound));

function playRound(e) {
    computerSelection = computerPlay();
    playerSelection = e.target.innerText;
    updateChoiceWindow(playerSelection, computerSelection);
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

function updateChoiceWindow(playerSelection, computerSelection) {
    const playerChoiceBox = document.querySelector('#playerChoice');
    const computerChoiceBox = document.querySelector('#computerChoice');
    let previousChoice;
    let currentChoice;
    if (playerSelection === "ROCK") {
        currentChoice = 'rock-btn';
    } else if (playerSelection === "PAPER") {
        currentChoice = 'paper-btn';
    } else {
        currentChoice = 'scissors-btn';
    }

    if (playerChoiceBox.classList.length === 1) {
        playerChoiceBox.classList.add(currentChoice);
    } else {
        previousChoice = playerChoiceBox.classList[1];
        playerChoiceBox.classList.replace(previousChoice, currentChoice);
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