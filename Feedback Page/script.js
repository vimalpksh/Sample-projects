const mainEl = document.querySelector(".main-container");
const ratingEl = document.querySelectorAll(".rating");
const btnEl = document.querySelector(".btn");

ratingEl.forEach((el) => {
  el.addEventListener("click", function () {
    ratingEl.forEach((innerEl) => {
      innerEl.classList.remove("active");
    });
    el.classList.add("active");
  });
});

btnEl.addEventListener("click", function () {
  mainEl.innerHTML = `<h2>Thank you for your feedback!</h2>`;
});
