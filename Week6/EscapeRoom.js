var readlineSync = require('readline-sync');

const playerName = readlineSync.question("May I have you name?")
 let isAlive = true;
 let hasKey = false;

 const intro = `Welcome to the escape room simulation!`

 console.log(intro)

 while (isAlive == true){
     const gameMenueOptions = readlineSync.keyIn(`Press the number keys 1- 3 to enter an option to: \n Put hand in hole \n Find the Key, or \n Open the Door`, {limit: `$<1-3>`});
     if (gameMenueOptions == 1 ) {
         console.log(`Oh Nooo! ${playerName} that was a trap! your hand was cut off, it had poison, and you died!`);
        isAlive = false;         
     }else if (gameMenueOptions == 2 && hasKey == false){
         console.log(`You have found the Key hidden in the planter!... Find the door it opens!`);
        hasKey = true;
     } else if (gameMenueOptions == 2 & hasKey == true){
         console.log(`You already found the Key, Go find the door!`);
     } else if (gameMenueOptions == 3 && hasKey == false){
         console.log(`You have found the door!..Turned the handle to find its locked... Go find the Key!`);
     }else if (gameMenueOptions == 3 && hasKey == true){
         console.log(`You unlock door and Escape! CONGRATULATIONS!!!`);
         isAlive = false;
     };
 };