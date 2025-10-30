const btn = document.querySelector("#btn");
const bmiInput = document.querySelector("#bmi-result");
const weightCondition = document.querySelector("#weight-condition");

function calculateBMI() {
  const height = document.querySelector("#height").value / 100;
  const weight = document.querySelector("#weight").value;
  const bmiValue = weight / (height * height);
  bmiInput.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    weightCondition.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightCondition.innerText = "Obesity";
  }
}

btn.addEventListener("click", calculateBMI);
