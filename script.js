// Function to get human choice
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    const humanChoice = choice.toLowerCase();
    switch (humanChoice) {
      case "rock":
      case "paper":
      case "scissors":
        return humanChoice;
      default:
        throw new Error("Invalid choice: " + humanChoice);
    }
  }
// Function to get computer choices
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      default:
        throw new Error("Unexpected value: " + computerChoice);
    }
  }