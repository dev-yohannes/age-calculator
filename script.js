let nameInput = document.querySelector("#name-input");
let dateInput = document.querySelector("#date-input");
let yearInput = document.querySelector("#year-input");
let monthInput = document.querySelector("#month-input");
let dayInput = document.querySelector("#day-input");
let calculateButton = document.querySelector("#calculate-age-button");
let finalResult = document.querySelector("#result");

// ------------

// old one
// function calculatingYear() {
//   calculatedYearResult = year - yearInput.value;
//   return calculatedYearResult;
// }

function calculatingMonth() {
  calculatedMonthResult = month - monthInput.value;
  return calculatedMonthResult;
}

function calculatingDay() {
  calculatedDayResult = dayOfWeek - dayInput.value;
  return calculatedDayResult;
}

function capitalizingFirstLetter() {
  let strign = nameInput.value;
  let result = strign.charAt(0).toUpperCase() + strign.slice(1);

  return result;
}

// function displayingWithName() {
//   // popUpText = `Hello ${capitalizingFirstLetter()}. You are ${calculatingYear()} years ${calculatingMonth()} month ${calculatingDay()} days old.`;
//   popUpText = `Hello ${capitalizingFirstLetter()}, You are ${calculatingYear()} years old.`;
//   return popUpText;
// }

// function calculatingYearInputs() {
//   date = new Date(yearInput.value);
//   let year = date.getFullYear();
//   let month = date.getMonth();
//   let dayOfMonth = date.getDate();

//   //
//   console.log(year);
//   console.log(month);
// }

calculateButton.addEventListener("click", function () {
  // finalResult.innerHTML = displayingWithName();
  // console.log(yearInput.value);

  //
  // calculatingYearInputs();
  date = new Date(dateInput.value);
  let year = date.getFullYear();
  let month = date.getMonth();

  //
  console.log(year);
  console.log(month);
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    finalResult.innerHTML = displayingWithName();
  }
});
