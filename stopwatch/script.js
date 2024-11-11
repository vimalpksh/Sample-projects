let startTime = 0;
let elapsedTime = 0;
let intervalTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let displayTime = document.querySelector(".display");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let paused = true;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalTime = setInterval(updateTime, 1000);
  }
});
stopBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalTime);
  }
});
resetBtn.addEventListener("click", () => {
  startTime = 0;
  clearInterval(intervalTime);
  elapsedTime = 0;
  intervalTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  paused = true;
  displayTime.textContent = `00:00:00`;
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  function padZero(unit) {
    return unit > 9 ? unit : "0" + unit;
  }

  secsVal = padZero(secs);
  minsVal = padZero(mins);
  hrsVal = padZero(hrs);

  displayTime.textContent = `${hrsVal}:${minsVal}:${secsVal}`;
}
