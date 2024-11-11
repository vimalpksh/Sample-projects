const btnEl = document.querySelector(".btn");
const diceEl = document.querySelector(".dice");
const hisEl = document.querySelector(".historys");

let historyList = [];

function diceroll() {
  const ranNum = Math.floor(Math.random() * 6) + 1;
  const diceFace = cubeFinder(ranNum);
  diceEl.innerHTML = diceFace;
  historyList.push(ranNum);
  updateRollHistory();
}

function updateRollHistory() {
  hisEl.innerHTML = "";
  for (i = 0; i < historyList.length; i++) {
    const liEl = document.createElement("li");
    liEl.innerHTML = `Roll Num ${i + 1} : <span>${cubeFinder(
      historyList[i]
    )}</span>`;
    hisEl.appendChild(liEl);
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
  diceroll();
});
