var readlineSync = require('readline-sync');

const playerName = readlineSync.question("May I have you name?")
 let isAlive = true;
 let hasKey = false;

 const intro = `Welcome to the escape room simulation!`

 console.log(intro)