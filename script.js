let nameInput = document.querySelector("#name-input");
let dateInput = document.querySelector("#date-input");
let calculateButton = document.querySelector("#calculate-age-button");
let finalResult = document.querySelector("#result");

/*
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
*/
/*
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
*/

date = new Date();
userDate = new Date(dateInput.value);
const userYear = userDate.getFullYear();
const userMonth = userDate.getMonth();
const userDayOfMonth = userDate.getDate();

const calculateYear = date.getFullYear() - userYear;

calculateButton.addEventListener("click", function () {
  console.log(userMonth);
});
