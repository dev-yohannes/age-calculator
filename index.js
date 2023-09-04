const nameInput = document.querySelector("#name-input");
const dateInput = document.querySelector("#date-input");
const calculateButton = document.querySelector("#calculate-age-button");
const finalResult = document.querySelector("#result");

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

const finalText = "And your Zodiac sign is";

function capitalizingFirstLetter() {
  const strign = nameInput.value;
  const result = strign.charAt(0).toUpperCase() + strign.slice(1);

  return result;
}

function calculatingYearInputs() {
  date = new Date();
  userDate = new Date(dateInput.value);
  const userYear = userDate.getFullYear();
  const userMonth = userDate.getMonth();
  const userDayOfMonth = userDate.getDate();

  const calculating = date.getFullYear() - userDate.getFullYear();

  function calculatingAge() {
    if (userMonth > date.getMonth()) {
      return calculating - 1;
    } else {
      return calculating;
    }
  }

  zodiac = "";

  if (
    (userMonth === jan && userDayOfMonth > 20) ||
    (userMonth === feb && userDayOfMonth < 18)
  ) {
    zodiac = "Aquarius";
  } else if (
    (userMonth === feb && userDayOfMonth > 19) ||
    (userMonth === mar && userDayOfMonth < 20)
  ) {
    zodiac = "Pieses";
  } else if (
    (userMonth === mar && userDayOfMonth > 21) ||
    (userMonth === apr && userDayOfMonth < 19)
  ) {
    zodiac = "Aries";
  } else if (
    (userMonth === apr && userDayOfMonth > 20) ||
    (userMonth === may && userDayOfMonth < 20)
  ) {
    zodiac = "Taurus";
  } else if (
    (userMonth === may && userDayOfMonth > 21) ||
    (userMonth === jun && userDayOfMonth < 20)
  ) {
    zodiac = "Gemini";
  } else if (
    (userMonth === jun && userDayOfMonth > 21) ||
    (userMonth === jul && userDayOfMonth < 22)
  ) {
    zodiac = "Cancer";
  } else if (
    (userMonth === jul && userDayOfMonth > 23) ||
    (userMonth === aug && userDayOfMonth < 22)
  ) {
    zodiac = "Leo";
  } else if (
    (userMonth === aug && userDayOfMonth > 23) ||
    (userMonth === sep && userDayOfMonth < 22)
  ) {
    zodiac = "Virgo";
  } else if (
    (userMonth === sep && userDayOfMonth > 23) ||
    (userMonth === oct && userDayOfMonth < 22)
  ) {
    zodiac = "Libra";
  } else if (
    (userMonth === oct && userDayOfMonth > 23) ||
    (userMonth === nov && userDayOfMonth < 21)
  ) {
    zodiac = "Scorpio";
  } else if (
    (userMonth === nov && userDayOfMonth > 22) ||
    (userMonth === dec && userDayOfMonth < 21)
  ) {
    zodiac = "Sagittarius";
  } else if (
    (userMonth === dec && userDayOfMonth > 22) ||
    (userMonth === jan && userDayOfMonth < 19)
  ) {
    zodiac = "Capricorn";
  }

  finalResult.innerText = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${zodiac}`;
}

calculateButton.addEventListener("click", function () {
  if (nameInput.value === "" && dateInput.value === "") {
    alert("You need to fill the inputs");
  } else {
    calculatingYearInputs();
  }
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (nameInput.value === "" && dateInput.value === "") {
      alert("You need to fill the inputs");
    } else {
      calculatingYearInputs();
    }
  }
});
