// Make a function that will return any given string into all caps followed by the same string all lowercase.
function stringCong(string){
    if (string === string){
        return string.toUpperCase().concat(string.toLowerCase())
    };
};
const resultOne = stringCong("hello");
console.log(resultOne)

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function splitAndRoundDown(string,){
    const split = string.length / 2;
    return Math.floor(split)
};
const resultTwo = splitAndRoundDown("Hello",);
console.log(resultTwo)

// Make a function that uses slice() and the other functions you've written to return the first half of the string.

function sliceWords(string){
    if (string === "hello"){
        return string.slice(0,2)
    }else{
        return string.slice(0,5)
    };
    
};
const resultThree = sliceWords("Hello World")
console.log(resultThree)

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

function capsHalf(string){
    for( i = 0; i <= string.length; i++){
        const length = string.length;
        if(length % 2 == 0){
            // return string.charAt(0).toUpperCase() + string.slice(1);

            return "hi"
        }else{
            return "bye"
        };
    };
};
const resultFour = capsHalf("hello");
console.log(resultFour)
// I could not figure out how to do the upper function. I tried many variations. I could not caps what I needed.

function titleCase(str){
    str = str.toLowerCase().split(" ");
    for(var s = 0; s < str.length; s++){
        str[s] = str[s].charAt(0).toUpperCase() + str[s].slice(1)        
    };
    return str.join(" ");
};
var resultFive = titleCase("hey friends! practice practice practice!");
console.log(resultFive)