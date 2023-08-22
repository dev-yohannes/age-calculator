let nameInput = document.querySelector("#name-input");
let dateInput = document.querySelector("#date-input");
let yearInput = document.querySelector("#year-input");
let monthInput = document.querySelector("#month-input");
let dayInput = document.querySelector("#day-input");
let calculateButton = document.querySelector("#calculate-age-button");
let finalResult = document.querySelector("#result");

const aquarius = "Aquarius";
const pieses = "Pieses";
const aries = "Aries";
const taurus = "Taurus";
const gemini = "Gemini";
const cancer = "Cancer";
const leo = "Leo";
const virgo = "Virgo";
const libra = "Libra";
const scorpio = "Scorpio";
const sagittarius = "Sagittarius";
const capricorn = "Capricorn";

const jan = 0;
const feb = 1;
const mar = 2;
const apr = 3;
const may = 4;
const jun = 5;
const jul = 6;
const aug = 7;
const sep = 8;
const oct = 9;
const nov = 10;
const dec = 11;

function calculatingYearInputs() {
  date = new Date(dateInput.value);
  let userYear = date.getFullYear();
  let userMonth = date.getMonth();
  let userDayOfMonth = date.getDate();

  if (userMonth === jan && userDayOfMonth > 20) {
    finalResult.innerHTML = `Your Zodiac sign is ${aquarius}`;
  } else if (userMonth === feb && userDayOfMonth < 18) {
    finalResult.innerHTML = `Your Zodiac sign is ${aquarius}`;
  } else if (userMonth === feb && userDayOfMonth > 19) {
    finalResult.innerHTML = `Your Zodiac sign is ${pieses}`;
  } else if (userMonth === mar && userDayOfMonth < 20) {
    finalResult.innerHTML = `Your Zodiac sign is ${pieses}`;
  } else if (userMonth === mar && userDayOfMonth > 21) {
    finalResult.innerHTML = `Your Zodiac sign is ${aries}`;
  } else if (userMonth === apr && userDayOfMonth < 21) {
    finalResult.innerHTML = `Your Zodiac sign is ${aries}`;
  }
}

calculateButton.addEventListener("click", function () {
  calculatingYearInputs();
});
