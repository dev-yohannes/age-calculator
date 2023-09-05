const nameEl = document.querySelector('#name-input')
const dateEl = document.querySelector('#date-input')
const calcBtn = document.querySelector('#calculate-age-button')
const output = document.querySelector('#result')

function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function calculate() {
  const name = capitalizeName(nameEl.value)
  const userDate = new Date(dateEl.value)

  if (!name || !userDate) {
    return (output.textContent = 'Please enter a valid name and date!')
  }

  const month = userDate.getMonth() + 1
  const day = userDate.getDate()

  const age = new Date().getFullYear() - userDate.getFullYear()

  let zodiac = ''

  if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
    zodiac = 'Capricorn'
  } else if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
    zodiac = 'Aquarius'
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    zodiac = 'Pisces'
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
    zodiac = 'Aries'
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    zodiac = 'Taurus'
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    zodiac = 'Gemini'
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    zodiac = 'Cancer'
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
    zodiac = 'Leo'
  } else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
    zodiac = 'Virgo'
  } else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
    zodiac = 'Libra'
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
    zodiac = 'Scorpio'
  } else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
    zodiac = 'Sagittarius'
  }

  output.textContent = `${name}, you are ${age} years old. Your zodiac sign is: ${zodiac}!`
}

calcBtn.addEventListener('click', calculate)
document.addEventListener('keypress', function (e) {
  if (e.key !== 'Enter') return

  calculate()
})
