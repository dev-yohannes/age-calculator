let nameInput = document.querySelector("#name-input");
let dateInput = document.querySelector("#date-input");
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

const finalText = "And your Zodiac sign is";

function capitalizingFirstLetter() {
  let strign = nameInput.value;
  let result = strign.charAt(0).toUpperCase() + strign.slice(1);

  return result;
}

function calculatingYearInputs() {
  date = new Date();
  userDate = new Date(dateInput.value);
  let userYear = userDate.getFullYear();
  let userMonth = userDate.getMonth();
  let userDayOfMonth = userDate.getDate();

  let calculating = date.getFullYear() - userDate.getFullYear();

  function calculatingAge() {
    if (userMonth < date.getMonth()) {
      return calculating;
    } else {
      return calculating - 1;
    }
  }

  if (
    (userMonth === jan && userDayOfMonth > 20) ||
    (userMonth === feb && userDayOfMonth < 18)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${aquarius}`;
  } else if (
    (userMonth === feb && userDayOfMonth > 19) ||
    (userMonth === mar && userDayOfMonth < 20)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${pieses}`;
  } else if (
    (userMonth === mar && userDayOfMonth > 21) ||
    (userMonth === apr && userDayOfMonth < 19)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${aries}`;
  } else if (
    (userMonth === apr && userDayOfMonth > 20) ||
    (userMonth === may && userDayOfMonth < 20)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${taurus}`;
  } else if (
    (userMonth === may && userDayOfMonth > 21) ||
    (userMonth === jun && userDayOfMonth < 20)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${gemini}`;
  } else if (
    (userMonth === jun && userDayOfMonth > 21) ||
    (userMonth === jul && userDayOfMonth < 22)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${cancer}`;
  } else if (
    (userMonth === jul && userDayOfMonth > 23) ||
    (userMonth === aug && userDayOfMonth < 22)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${leo}`;
  } else if (
    (userMonth === aug && userDayOfMonth > 23) ||
    (userMonth === sep && userDayOfMonth < 22)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${virgo}`;
  } else if (
    (userMonth === sep && userDayOfMonth > 23) ||
    (userMonth === oct && userDayOfMonth < 22)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${libra}`;
  } else if (
    (userMonth === oct && userDayOfMonth > 23) ||
    (userMonth === nov && userDayOfMonth < 21)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${scorpio}`;
  } else if (
    (userMonth === nov && userDayOfMonth > 22) ||
    (userMonth === dec && userDayOfMonth < 21)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${sagittarius}`;
  } else if (
    (userMonth === dec && userDayOfMonth > 22) ||
    (userMonth === jan && userDayOfMonth < 19)
  ) {
    finalResult.innerHTML = `Hello ${capitalizingFirstLetter()}, You are ${calculatingAge()} years old. ${finalText} ${capricorn}`;
  }
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
