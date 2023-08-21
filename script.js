let nameInput = document.querySelector("#name-input");
let yearInput = document.querySelector("#year-input");
let monthInput = document.querySelector("#month-input");
let dayInput = document.querySelector("#day-input");
let calculateButton = document.querySelector("#calculate-age-button");
let finalResult = document.querySelector("#result");

function calculating() {
  result = 2023 - yearInput.value;
  return result;
}

function displayingWithName() {
  string = `Hello ${nameInput.value}. You are ${calculating()} years old.`;
  return string;
}

calculateButton.addEventListener("click", function () {
  finalResult.innerHTML = displayingWithName();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // finalResult.innerHTML = calculating();
    finalResult.innerHTML = displayingWithName();
  }
});
