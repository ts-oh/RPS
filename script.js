// Event listener for Game buttons
const playerSelection = document.querySelector('.btns');
playerSelection.addEventListener('click', playGame);
const restartGame = document.querySelector('#reset');
restartGame.addEventListener('click', resetGame);

//Remove eventListner function when winner is declared after five rounds
function disablePlay() {
  playerSelection.removeEventListener('click', playGame);
}

// Enable eventListener function when reset button is clicked
function enablePlay() {
  playerSelection.addEventListener('click', playGame);
}

// Global Variables for score keeping
const roundResult = document.querySelector('#roundresult');
roundResult.textContent = `Round Result:`;
let computerScore = 0;
const cScore = document.querySelector('#cscore');
cScore.textContent = `Computer Wins: ${0}`;
let playerScore = 0;
const pWin = document.querySelector('#pscore');
pWin.textContent = `Player Wins: ${0}`;
let tieScore = 0;
const tieGame = document.querySelector('#tie');
tieGame.textContent = `Draws: ${0}`;
const finalWinner = document.querySelector('#winner');
finalWinner.textContent = `Final Game Winner: ?`;

// Game play callback function
function playGame(e) {
  const restartGame = e.target.id;
  const playerSelection = e.target.id;
  const computerChoice = computerPlay();
  playRound(playerSelection, computerChoice);
  declareWinner();
}

// Computer random pick play function
function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let cPick = randomNum;
  if (cPick === 1) {
    return 'Rock';
  } else if (cPick === 2) {
    return 'Paper';
  } else if (cPick === 3) {
    return 'Scissors';
  }
  console.log(cpick);
}

// Game condition comparison function
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    tieScore++;
    roundResult.textContent = `It's a Tie!`;
    tieGame.textContent = `Tie Games: ${tieScore}`;
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')
  ) {
    playerScore++;
    roundResult.textContent = `Round Result: You Win! ${playerSelection} Beats ${computerSelection}`;
    pWin.textContent = `Player Wins: ${playerScore}`;
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Rock')
  ) {
    computerScore++;
    roundResult.textContent = `Round Result: You Lose! ${computerSelection} Beats ${playerSelection}`;
    cScore.textContent = `Computer Wins: ${computerScore}`;
  }
}

// Function to show who is the winner
function declareWinner() {
  if (playerScore >= 5) {
    finalWinner.textContent = `Game Winner: 🦧 PLAYER!!! 🍌 `;
    disablePlay();
  } else if (computerScore >= 5) {
    finalWinner.textContent = `Game Winner: 🤖 COMPUTER!!! 🦾`;
    disablePlay();
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  pWin.textContent = `Player Wins: ${0}`;
  computerScore = 0;
  cScore.textContent = `Computer Wins: ${0}`;
  tieScore = 0;
  tieGame.textContent = `Draws: ${0}`;
  finalWinner.textContent = `Final Game Winner: ?`;
  roundResult.textContent = `Round Result: `;
  enablePlay();
}
