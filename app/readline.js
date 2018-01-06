const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number ', (number) => {
  // TODO: Log the answer in a database
  console.log(`This is the number provided: ${number}`);

  function number (arr) {
    return arr.reduce(function(${number}, ${number}) {
      return ${number} + ${number}
    }, 0)
  }

  module.exports.number = number

  rl.close();
});
