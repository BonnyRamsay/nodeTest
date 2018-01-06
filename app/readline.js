const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('give me a number? ', (answer) => {

  var number : ${answer};
  // TODO: Log the answer in a database
//  console.log(`Thank you for your number: ${answer}`);

  rl.close();
});
