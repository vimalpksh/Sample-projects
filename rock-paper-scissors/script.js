const btnEl = document.querySelectorAll("button");
const winEl = document.querySelector(".win-state");
const youScoreEl = document.querySelector(".you-score");
const compScoreEl = document.querySelector(".comp-score");

const optionAvail = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let compScore = 0;

btnEl.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const randomNumber = Math.floor(Math.random() * 3);
    const compChoice = optionAvail[randomNumber];
    const result = gameLogic(playerChoice, compChoice);
  });
});

function gameLogic(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    winEl.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    winEl.textContent = "You win!";
    userScore++;
    youScoreEl.textContent = userScore;
  } else {
    winEl.textContent = "Computer wins!";
    compScore++;
    compScoreEl.textContent = compScore;
  }
}
