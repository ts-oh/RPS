let computerWinCount = 0;
let playerWinCount = 0;
let tieCount = 0;
let round = 0;

let scoreOutput = function gameScore() {
  return (
    'Tie count: ' +
    tieCount +
    '\n' +
    'Player win count: ' +
    playerWinCount +
    '\n' +
    'Computer win count: ' +
    computerWinCount
  );
};

for (round = 0; round <= 4; round++) {
  // parameter for player selection
  let playerSelection = prompt('Rock, Paper, Scissors ?').toLowerCase();
  console.log('Player plays: ' + playerSelection);

  // function that randomly returns either rock, paper, scissors
  function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
      return 'rock';
    } else if (randomNum === 2) {
      return 'paper';
    } else if (randomNum === 3) {
      return 'scissors';
    }
  }

  // parameter for computer selection
  let computerSelection = computerPlay();
  console.log('Computer plays: ' + computerSelection);

  // function takes two parameters and returns comparisons
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      tieCount++;
      return "It's a Tie!";
    } else if (
      (playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
      playerWinCount++;
      return 'Player wins! ' + playerSelection + ' beats ' + computerSelection;
    } else if (
      (playerSelection == 'rock' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'rock')
    ) {
      computerWinCount++;
      return (
        'Computer wins! ' + computerSelection + ' beats ' + playerSelection
      );
    } else {
      playerSelection == '';
      return 'please input your play';
    }
  }
  console.log(playRound(playerSelection, computerSelection));
}

console.log(scoreOutput());
