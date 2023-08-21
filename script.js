let nameInput = document.querySelector("#name-input");
let yearInput = document.querySelector("#year-input");
// let monthInput = document.querySelector("#month-input");
// let dayInput = document.querySelector("#day-input");
let calculateButton = document.querySelector("#calculate-age-button");
let finalResult = document.querySelector("#result");

// ------------
// let date = new Date();
// let yr = date.getFullYear();
// let month = date.getMonth();

// yearInput.value =
//   date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

// //
// yearInput.addEventListener("keyup", (e) => {
//   const [year, month, day] = e.target.value.split("-");

//   console.log({ year, month, day });
// });

// old one
function calculatingYear() {
  calculatedYearResult = 2023 - yearInput.value;
  return calculatedYearResult;
}

function capitalizingFirstLetter() {
  let strign = nameInput.value;
  let result = strign.charAt(0).toUpperCase() + strign.slice(1);

  return result;
}

function displayingWithName() {
  popUpText = `Hello ${capitalizingFirstLetter()}. You are ${calculatingYear()} years old.`;
  return popUpText;
}

calculateButton.addEventListener("click", function () {
  finalResult.innerHTML = displayingWithName();
  console.log(yearInput.value);
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    finalResult.innerHTML = displayingWithName();
  }
});
