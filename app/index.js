const calc = require('./calc')
const readline  = require('readline')

// const numbersToAdd = [
//   3,
//   4,
//   10,
//   2
// ]
//
// const result = calc.sum(numbersToAdd)
// console.log(`The result is: ${result}`)


const usernumbers = readline.createInterface({
   input: process.stdin
//   output: process.stdout
 });

const userresult = calc.sum(usernumbers)
console.log(`The result is: ${userresult}`)

userresult.question('Please enter a number ', (usernumber) => {
 userresult.close();
 });

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// userresult.question('Please enter a number ', (usernumber) => {
// userresult.close();
// });
