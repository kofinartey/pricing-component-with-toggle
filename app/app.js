const planButton = document.querySelector(".plan__button");
const buttonKnob = document.querySelector(".btn__knob");
const monthlyPrices = document.querySelectorAll(".month--price");
const annualPrices = document.querySelectorAll(".year--price");
const totalCards = monthlyPrices.length;

displayAnnual();

planButton.addEventListener("click", () => {
  if (buttonKnob.classList.contains("btn__knob--clicked")) {
    buttonKnob.classList.remove("btn__knob--clicked");
    displayAnnual();
  } else {
    buttonKnob.classList.add("btn__knob--clicked");
    displayMonthly();
  }
  //   buttonKnob.style.left = "29px";
});

function displayMonthly() {
  for (let i = 0; i < totalCards; i++) {
    annualPrices[i].style.display = "none";
    monthlyPrices[i].style.display = "block";
  }
}

function displayAnnual() {
  for (let i = 0; i < totalCards; i++) {
    monthlyPrices[i].style.display = "none";
    annualPrices[i].style.display = "block";
  }
}
