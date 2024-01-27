let playerWins = 0;
let computerWins = 0;
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let results = document.querySelector(".round-results");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let gameResult = document.querySelector(".game-header");

rockButton.addEventListener("click", () => {
  game("rock");
});

paperButton.addEventListener("click", () => {
  game("paper");
});

scissorsButton.addEventListener("click", () => {
  game("scissors");
});

function game(playerChoice) {
  let winner = playRound(playerChoice, getComputerChoice());
  if (winner != "tie") {
    if (winner == "player") {
      playerWins++;
      playerScore.textContent = `Player Score : ${playerWins}`;
    } else if (winner == "computer") {
      computerWins++;
      computerScore.textContent = `Computer Score : ${computerWins}`;
    }
  } else if (winner == "tie") {
    let tieGame = playRound(playerChoice, getComputerChoice());
    if (tieGame == "player") {
      playerWins++;
      playerScore.textContent = `Player Score : ${playerWins}`;
    } else if (tieGame == "computer") {
      computerWins++;
      computerScore.textContent = `Computer Score : ${computerWins}`;
    }
  }

  // Check if the game has ended
  if (playerWins == 5 || computerWins == 5) {
    declareWinner();
    // Reset the game
    playerWins = 0;
    computerWins = 0;
    playerScore.textContent = `Player Score : ${playerWins}`;
    computerScore.textContent = `Computer Score : ${computerWins}`;
  }
}

// This function gets the computer's choice

function getComputerChoice() {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) return rock;
  if (choice == 1) return paper;
  if (choice == 2) return scissors;
}

//This function plays a single round of the game and returns a user the result

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    results.textContent = "it's a tie!!! lets do a rematch";
    return "tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    results.textContent = "You Win! Rock beats scissors";
    return "player";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    results.textContent = "Computer won! Rock beats scissors";
    return "computer";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    results.textContent = "You win! Scissors beat paper";
    return "player";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    results.textContent = "Computer won! Scissors beat paper";
    return "computer";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    results.textContent = "You win! Paper beats rock";
    return "player";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    results.textContent = "Computer won! paper beats rock";
    return "computer";
  }
}

function declareWinner() {
  if (playerWins == 5) {
    gameResult.textContent = "Player is the final winner!";
  } else if (computerWins == 5) {
    gameResult.textContent = "Computer is the final winner!";
  }
}
