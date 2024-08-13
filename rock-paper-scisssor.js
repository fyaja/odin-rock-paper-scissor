function getComputerChoice() {
  const chance = Math.random();
  if (chance <= 0.33) {
    console.log("Rock");
  } else if (chance <= 0.66) {
    console.log("Paper");
  } else {
    console.log("Scissor");
  }
}
