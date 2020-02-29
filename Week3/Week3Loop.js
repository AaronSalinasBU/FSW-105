//office item var and loop with a if for counter
var officeItems = ["stapeler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var current = null;
var cnt = 0;
for (var t = 0; t < officeItems.length; t++) {
    if (officeItems[t] === "computer") {
        cnt++;
    };
};
console.log("there are" + " " + cnt + " " + "computers") 

// loop to see who can and cant see the movies
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male",
    },{
        name: "Madeline",
        age: 80,
        gender: "female",
    },{
        name: "Cheryl",
        age: 22,
        gender: "female",
    },{
        name: "Sam",
        age: 30,
        gender: "male",
    },{
        name: "Suzy",
        age: 4,
        gender: "female",
    }
];
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i]["gender"] !== "male"){

    } else if( peopleWhoWantToSeeMadMaxFuryRoad[i]["age"] >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]["name"] + " " + "is old enough to see the movie Mad Max! Lets Go")
    }else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]["name"] + " " + "Is not old enough to see the movie Mad Max! Don't let him in!")
    };
    if (peopleWhoWantToSeeMadMaxFuryRoad[i]["gender"] !== "female"){

    } else if( peopleWhoWantToSeeMadMaxFuryRoad[i]["age"] >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]["name"] + " " + "is old enough to see the movie Mad Max! Lets Go")
    }else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]["name"] + " " + "Is not old enough to see the movie Mad Max! Don't let her in!")
    };
};

// odd or even?
for (var x = 0; x < 100; x++){
    if([x] % 2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}

// is light on or off?
var array = [2, 5, 435, 4, 3]
var sum = 0
for (var c = 0; c < array.length; c++){
    sum += array[c]
};
if(sum % 2 === 1){
    console.log("light is switched on")
}else {
    console.log("light is switched off")
}
