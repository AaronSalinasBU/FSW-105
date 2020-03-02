var person = {
    name: "Bobby",
    age: 12
}// Bronz Medal
if (person.age >= 18 && person.name.charAt(0) === "B") {
    console.log("Bobby can go the movies")
} else {
    console.log("bobby can not go to the movies")
};
//silver medal
if (1 === "1") {
console.log("strict")
}else if(1 =="1" ) {
    console.log("loose")
}else {
    console.log("not equal at all")
};
//Gold Medal
var isString = ("dog" === "dog") ? "is a string" : "is not a string";
console.log(isString);
var isBoolean = ( typeof true === "boolean") ? "is a boolean": "is not a boolean";
console.log(isBoolean);
var beenDefined = ("var" === "var") ? "var has been defined" : "var has not been defined";
console.log(beenDefined);