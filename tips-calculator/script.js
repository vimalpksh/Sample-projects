const billEl = document.getElementById("bill-amount");
const tipEl = document.getElementById("tip-perc");
const totalEl = document.getElementById("total-amt");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  const billValue = billEl.value;
  const tipValue = tipEl.value;
  const totalAmt = billValue * (1 + tipValue / 100);

  totalEl.innerText = totalAmt.toFixed(2);
});
