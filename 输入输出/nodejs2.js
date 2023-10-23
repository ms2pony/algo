var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  // output: process.stdout
});

rl.on('line', (line) => {
  console.log(`Received: ${line}`);

  console.log("nihao")
});