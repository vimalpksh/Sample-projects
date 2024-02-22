const displayTime = document.querySelector(".display");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

startButton.addEventListener("click", () => startTheWatch());
stopButton.addEventListener("click", () => stopTheWatch());
resetButton.addEventListener("click", () => resetTheWatch());

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime.innerHTML =
    padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
}

function padZero(num) {
  return num < 10 ? "0" + num : num;
}

function startTheWatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function stopTheWatch() {
  clearInterval(timer);
}

function resetTheWatch() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML =
    padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
}
