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
// playround function and playgame function
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(`I win this round! Paper covers rock.
        Computer Score: ${humanScore} || humanScore: ${++computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win this round! Paper covers rock.
        Human Score: ${++humanScore} || computerScore: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(`I Win  this round! Rock crushes Scissors 
        Computer Score: ${humanScore}  || humanScore: ${++computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win this round! Rock crushes Scissors 
       Human Score: ${++humanScore} || computerScore: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You Win  this round! Scissors cuts Paper.
         Human Score: ${++humanScore} || computerScore: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(`I win this round! Scissors cuts paper.
        Computer Score: ${humanScore} || humanScore: ${++computerScore}`);
    } else {
      console.log("It's a tie!");
    }
  }
  for (i = 1; i < 6; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(
      `Congrats! You're the overall Winner with a total of ${humanScore} points.  || I lose!`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Congrats, to me! I am the overall Winner with a total of ${computerScore} points.  || You're a loser!`
    );
  } else {
    `It is a tie match at the end! The points are the same! Human Score: ${humanScore} ||  Computer score: ${computerScore}`;
  }
}
playGame();
