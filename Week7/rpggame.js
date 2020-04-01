var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log(`Welcome ${userName} to ~Pandora~ \n Lets elxplore the ever changing world of Pandora!`);

var instructions = (`instructions for the game is as follows \n 1. to walk forward \n 2. to view stats \n 3. use to quit`);
var choice = ["walk", "stats", "quit"]
console.log(instructions);

readlineSync.keyInPause(`game start:`);

const monsters = ["Ogre Knight", "Skull Knight", " Thunder Wolve", "Hornet"];
const lootItems = ["Skull", "Loot Chest", "Jewl of Bless", "Jewl of Soul"];
let playerHealth = 50;
const droppedItem = lootItems[Math.floor(Math.random() * lootItems.length)];

 const theGame = function game(){
    const prize = [ ];
    let name = userName
    let monstersHealth = 50;
    const monster = monsters[Math.floor(Math.random() * monsters.length)]
    const attack = Math.floor(Math.random() * 6 + 8);
    const monsterAttack = Math.floor(Math.random() * 6 + 8);

    const task = readlineSync.keyInSelect(choice, `What is your choice?`)
    
    if(choice[task] == "quit"){
        return playerHealth = 0;
    }else if(choice[task] == "stats"){
        console.log(` HP = ${playerHealth} \n Items = ${droppedItem}`);
    }else if(choice[task] ==  "walk"){
        let key = Math.random();
        if(key <= .25){
            console.log(`Walking throught the world of Pandora`);
        }else if(key >= .25){
            console.log(`${monster} has attacked!`);
            while(monstersHealth > 0 && playerHealth > 0){
                const user = readlineSync.question(`"a" to attack \n "r" to run \n What will it me ${name}?`)

                switch(user){
                    case 'r':
                        const run = Math.random();
                        if(run < .5){
                            playerHealth -= monsterAttack
                            console.log(`${monster} hit you for ${monsterAttack} stoping your escape!`)

                            switch(user){
                                case 'a':
                                    monstersHealth -= attack
                                    console.log (`you hit ${monster} for ${attack}`)

                                    playerHealth -= monsterAttack
                                    console.log(`${monster} hit you for ${monsterAttack}`)
                                    
                                    if(monstersHealth <= 0){
                                        console.log(`You have killed the ${monster}!`)
                                        let loot = Math.random()
                                        if(loot <= .3){
                                            prize.push(lootItems)
                                        }
                                    }else if(playerHealth <= 0){
                                        console.log(`${monster} has killed you!`)
                                        return theGame
                                    }
                            }                            
                        } else if( run > .5){
                            console.log(`you got away safely!`)
                            return theGame                            
                        }
                    case 'a':
                        case 'a':
                            monstersHealth -= attack
                            console.log (`you hit ${monster} for ${attack}`)

                            playerHealth -= monsterAttack
                            console.log(`${monster} hit you for ${monsterAttack}`)
                            
                            if(monstersHealth <= 0){
                                console.log(`You have killed the ${monster}! and healled your self to full`)
                                let loot = Math.random()
                                if(loot <= .3){
                                    prize.push(lootItems)
                                }
                            }else if(playerHealth <= 0){
                                console.log(`${monster} has killed you!`)
                            }
                }
            }
        }
    }
}

while (playerHealth > 0){
    userLife = function(){
        userAlive = true;
        playerHealth = 50;
    }
    userLife()
    theGame()
}