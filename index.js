let nameInput = document.querySelector("#name-input");
let dateInput = document.querySelector("#date-input");
let yearInput = document.querySelector("#year-input");
let monthInput = document.querySelector("#month-input");
let dayInput = document.querySelector("#day-input");
let calculateButton = document.querySelector("#calculate-age-button");
let finalResult = document.querySelector("#result");

function calculatingYearInputs() {
  date = new Date(dateInput.value);
  let userYear = date.getFullYear();
  let userMonth = date.getMonth();
  let userDayOfMonth = date.getDate();

  if (userMonth === 0 && userDayOfMonth > 20) {
    finalResult.innerHTML = "Aquarius";
  } else if (userMonth === 1 && userDayOfMonth < 18) {
    finalResult.innerHTML = "Aquarius";
  } else if (userMonth === 1 && userDayOfMonth > 19) {
    finalResult.innerHTML = "Pieses";
  } else if (userMonth === 2 && userDayOfMonth < 20) {
    finalResult.innerHTML = "Pieses";
  } else if (userMonth === 2 && userDayOfMonth > 21) {
    finalResult.innerHTML = "Aries";
  } else if (userMonth === 3 && userDayOfMonth < 21) {
    finalResult.innerHTML = "Aries";
  }
}

calculateButton.addEventListener("click", function () {
  calculatingYearInputs();
});

/*
format = mm/dd/yyy

aquarius (< jan 20 - > feb 18) =
pieses (< feb 19 - > mar 20) =
Aries (< mar 21 - > apr 19) =
taurus (< apr 20 - > may 20)
gemini (< may 21 - > jun 20)
cancer (< jun 21 - > jul 22) 
leo (< jul 23 - > aug 22)
virgo (< agu 23 - > sep 22)
libra (< sep 23 - > oct 22)
scorpio (< oct 23 - > nov 21)
sagittarius (< nov 22 - > dec 21)
capricorn (< dec 22 - > jan 19)
*/
