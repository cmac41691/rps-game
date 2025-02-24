// Select buttons and result display
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

// Function to get computer choice
function getComputerChoice() {
    const hands = ["Rock", "Paper", "Scissors"];
    return hands[Math.floor(Math.random() * hands.length)];
}

// Function to play a single round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice(); 

    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        result = `You Lose! ${computerChoice} beats ${playerChoice}`;
    }

    // Display result in the UI
    resultDiv.textContent = result;
}

// Add event listeners to buttons
rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));
