const calc = require('./calc')
//const readline  = require('./readline')

// const numbersToAdd = [
//   3,
//   4,
//   10,
//   2
// ]
//
// const result = calc.sum(numbersToAdd)
// console.log(`The result is: ${result}`)


const usernumbers = [
   1,
   2,
   3
 ]

const userresult = calc.sum(usernumbers)
console.log(`The result is: ${userresult}`)


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// userresult.question('Please enter a number ', (usernumber) => {
// userresult.close();
// });
