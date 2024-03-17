const textEl = document.getElementById("text");
const totalEl = document.getElementById("total");
const remainEl = document.getElementById("remain");

textEl.addEventListener("keyup", () => updateChanges());

updateChanges();

function updateChanges() {
  totalEl.innerText = textEl.value.length;
  remainEl.innerText = textEl.getAttribute("maxlength") - textEl.value.length;
}
