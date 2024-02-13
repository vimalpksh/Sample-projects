const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const ampm = document.querySelector(".ampm");

function displayClock() {
  const dateTime = new Date();
  const hours = padZero(dateTime.getHours());
  const minutes = padZero(dateTime.getMinutes());
  const seconds = padZero(dateTime.getSeconds());

  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  if (hours > 12) {
    hours = hours - 12;
    ampm.innerHTML = "PM";
  }

  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }
}

setInterval(displayClock, 500);
