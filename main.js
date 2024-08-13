let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const chance = Math.random();
  if (chance <= 0.33) {
    return "rock";
  } else if (chance <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors!");
  // using while loops to check the valid input.
  while (!["rock", "paper", "scissors"].includes(humanChoice.toLowerCase())) {
    humanChoice = prompt(
      "Invalid choice! Please choose rock, paper, or scissors:"
    );
  }

  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(`Tie! ${humanChoice}, ${computerChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    alert(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    alert(`You Win! ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    alert(`You Lose! ${humanScore} - ${computerScore}`);
  } else {
    alert(`Tie ! ${humanScore} - ${computerScore}`);
  }
}

// playGame();
