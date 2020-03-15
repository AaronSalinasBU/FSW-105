const ownerName = "john"
const age = 101

function runForLoop(pets) {
    var petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = {type: pets[i]}
        ownerName;
        if (pets[i] === "cat"){
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name : ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", ownerName)
    return petObjects
}
runForLoop(["cat", "dog"]);

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => ({type:"carrot", name: carrot}) )
}

console.log(mapVegetables(carrots));

const people = [
    {name: "Princess Peach", friendly: false},
    {name: "Luigy", friendly: true},
    {name: "Mario", friendly: true},
    {name: "Bower", friendly: false}
]

function filterForFriendly(arr){
    return arr.filter(person => person.friendly)
}
console.log(filterForFriendly(people));

doMathSum( (a, b) => a + b );

const produceProduct = functionName((a, b) => a * b)

const firstName = "Jane"
const lastName = "Doe"
const age = 100
function printScreen(str){
    return "Hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?"
}
console.log(printScreen(firstName, lastName, age));

function printScreen(str){
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
console.log(printScreen(firstName, lastName, age));

const animals = [
    {type: "dog", name: "theodore"},
    {type: "cat", name: "whiskers"},
    {type: "pig", name: "piglette"},
    {type: "dog", name: "sparky"}
]
function filterForDogs(arr){
    return arr.filter(animal => animal.type === "dog")
}
console.log(filterForDogs(animals));

const location = "Hawaii"
const name = "Janice"
function letterTofriend(str){
    return `
    Hi ${name},

    Welcome to ${location}.

    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}
console.log(letterTofriend(location, name));