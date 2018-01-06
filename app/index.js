const calc = require('./calc')
const readline  = require('./readline')

const numbersToAdd = [
  readline.number,
  4,
  10,
  2
]

const result = calc.sum(numbersToAdd)
console.log(`The result is: ${result}`)
