function sum(num1, num2){
    return num1 + num2
};
var result = sum( 12, 30);
console.log(result)

function greaterThan(num1, num2){
    if(num1 > num2){
        return num1 + " is > " + num2
    } else {
        return num2 + " is > " + num1
    };
};

var resultTwo = greaterThan( 12, 30);
console.log(resultTwo)

function evenOrOdd(num1){
    if (num1 % 2 === 0){
        return num1 + " is even "
    } else {
        return num1 + " is odd "
    };
};

var resultThree = evenOrOdd(24)
console.log(resultThree)

function countString(string){
    for(var i = 0; i <= 20; i++){
        if (string.length <= 20){
            return string + string
        }else{
            return string.slice(0, 20)
        }
    }
}
var resultFour = countString("hello  my name is michael, what is yours?")
console.log(resultFour)
