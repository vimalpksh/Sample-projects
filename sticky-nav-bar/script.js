const navEl = document.querySelector(".navi");
const topEl = document.querySelector(".top-container");
const botEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > botEl.offsetTop - navEl.offsetHeight - 30) {
    navEl.classList.add("active");
  } else {
    navEl.classList.remove("active");
  }
});
