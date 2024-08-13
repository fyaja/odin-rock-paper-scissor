let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.value);
  });
});

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

function playRound(humanChoice, computerChoice) {
  const resultText = document.querySelector(".result > p");
  if (humanChoice === computerChoice) {
    resultText.innerText = `Tie! ${humanChoice}, ${computerChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText.innerText = `You Win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
    updateScores();
  } else {
    resultText.innerText = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
    updateScores();
  }
}

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  updateImage(humanChoice, computerChoice);
}

function updateScores() {
  document.querySelector(".player-score").innerText = `Player: ${humanScore}`;
  document.querySelector(
    ".computer-score"
  ).innerText = `Computer: ${computerScore}`;
}

function updateImage(humanChoice, computerChoice) {
  document.querySelector(".result-img").innerHTML = `
    <img src="images/${humanChoice}.jpg" alt="${humanChoice}">
    <span>:</span>
    <img src="images/${computerChoice}.jpg" alt="${computerChoice}">
  `;
}

updateScores();
