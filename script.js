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
  let player = playerSelection.toLowerCase();

  if (player == computerSelection) {
    console.log("it's a tie!!! lets do a rematch");
    return "tie";
  } else if (player == "rock" && computerSelection == "scissors") {
    console.log("You Win! Rock beats scissors");
    return "player";
  } else if (player == "scissors" && computerSelection == "rock") {
    console.log("Computer won! Rock beats scissors");
    return "computer";
  } else if (player == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors beat paper");
    return "player";
  } else if (player == "paper" && computerSelection == "scissors") {
    console.log("Computer won! Scissors beat paper");
    return "computer";
  } else if (player == "paper" && computerSelection == "rock") {
    console.log("You win! Paper beats rock");
    return "player";
  } else if (player == "rock" && computerSelection == "paper") {
    console.log("Computer won! paper beats rock");
    return "computer";
  }
}

function game() {
  playerSelection = prompt("what is your choice");
  computerSelection = getComputerChoice();
  return playRound(playerSelection, computerSelection);
}

//declaring points and winner

function declare_winner() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    let winner = game();
    if (winner != "tie") {
      if (winner == "player") {
        playerWins++;
      } else if (winner == "computer") {
        computerWins++;
      }
    } else if (winner == "tie") {
      let tieGame = game();
      if (tieGame == "player") {
        playerWins++;
      } else if (tieGame == "computer") {
        computerWins++;
      }
    }
  }

  if (playerWins == 3) {
    console.log(`player wins! with score ${playerWins}`);
  } else if (computerWins == 3) {
    console.log(`Computer Wins! with score ${computerWins}`);
  }
}

declare_winner();
