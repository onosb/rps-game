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