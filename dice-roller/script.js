const btnEl = document.querySelector(".btn");
const diceEl = document.querySelector(".dice");
const ulEl = document.querySelector(".historys");

let historyEl = [];

function diceRoll() {
  const ranNum = Math.floor(Math.random() * 6) + 1;
  const diceFace = cubeFinder(ranNum);
  diceEl.innerHTML = diceFace;
  historyEl.push(ranNum);
  updateDiceHistory();
}

function updateDiceHistory() {
  ulEl.innerHTML = ``;

  for (i = 0; i < historyEl.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll Number ${i + 1} <span>${cubeFinder(
      historyEl[i]
    )}</span>`;
    ulEl.appendChild(listItem);
  }
}

function cubeFinder(num) {
  switch (num) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

btnEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
  }, 1000);
  diceRoll();
});
