const btnEl = document.querySelector(".btn");
const dobEl = document.querySelector(".dob");
const resultEl = document.querySelector(".result");

btnEl.addEventListener("click", calculateAge);

function calculateAge() {
  let inputValue = dobEl.value;
  if (inputValue === "") {
    alert("Please input the date of birth");
  }
  getAge(inputValue);
}

function getAge(value) {
  const currDate = new Date();
  const dobDate = new Date(value);
  let age = currDate.getFullYear() - dobDate.getFullYear();
  let monthEl = currDate.getMonth() - dobDate.getMonth();

  if (
    monthEl < 0 ||
    (monthEl === 0 && currDate.getDate() < dobDate.getDate())
  ) {
    age--;
  }
  resultEl.textContent = `Your are ${age} ${age > 1 ? "year" : "years"} old.`;
}
