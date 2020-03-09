var readlineSync = require('readline-sync');
 
function addTwoIntegers(num1, num2){
    return `Adding ${num1} with ${num2} returns a sum of : ${num1 + num2}`
};
function subTwoIntegers(num1, num2){
    return `Subtracting ${num1} with ${num2} returns a sum of : ${num1 - num2}`
};
function mulTwoIntegers(num1, num2){
    return `Multiplying ${num1} with ${num2} returns a sum of : ${num1 * num2}`
};
function divTwoIntegers(num1, num2){
    return `Dividing ${num1} with ${num2} returns a sum of : ${num1 / num2}`
};

var num1 = readlineSync.questionInt("please enter your first number : ")
var num2 = readlineSync.questionInt("please enter your first number : ")
var enteredOperator = readlineSync.question("please enter the olperation to perform: add, sub, mul, div : ")

if (enteredOperator === "add"){
    console.log(addTwoIntegers(num1, num2));
}else if(enteredOperator === "sub"){
    console.log(subTwoIntegers(num1, num2))
}else if(enteredOperator === "mul"){
    console.log(mulTwoIntegers(num1, num2))
}else if(enteredOperator === "div"){
    console.log(divTwoIntegers(num1, num2))
}