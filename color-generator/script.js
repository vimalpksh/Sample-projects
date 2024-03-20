const contEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContEl = document.createElement("div");
  colorContEl.classList.add("color-container");
  contEl.appendChild(colorContEl);
}

const colorContEls = document.querySelectorAll(".color-container");
generateColor();

function generateColor() {
  colorContEls.forEach((colorContEl) => {
    const newColor = getRandomColor();
    colorContEl.style.backgroundColor = newColor;
    colorContEl.innerText = newColor;
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
