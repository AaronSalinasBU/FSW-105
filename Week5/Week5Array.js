function fiveAndGreaterOnly(arr){
    return arr.filter(num => num >= 5)

}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function  evensOnly(arr){
    return arr.filter(num => num % 2 === 0)
}
console.log(evensOnly([3, 6, 8, 2]));

function fiveCharactersOrFewerOnly(arr){
    return arr.filter(String => String.length <= 5)
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten"]))

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(itIs => itIs.member)
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true},
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }]
));

function ofAge(arr){
    return arr.filter(oldEnough => oldEnough.age >=18)
}
console.log(ofAge([
        { name: "Angelina Jolie", age:80},
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }]
));

function doubleNumbers(arr){
    return arr.map(num => num * 2)
}
console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
    return arr.map(num => string = `${num}`)
}
console.log(stringItUp([2, 5, 100]))

function capitalizeNames(arr){
    return arr.map(nameCase => nameCase.charAt(0).toUpperCase() + nameCase.toLowerCase().slice(1))
}
console.log(capitalizeNames(["john", "Jacob", "jinGleheimer", "schmidt"]))

function namesOnly(arr){
    return arr.map(onlyName => onlyName.name)
}
console.log(namesOnly([
        { name: "Angelina Jolie", age:80},
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }]
));

function makeStrings(arr){
    return arr.map(oldEnough => oldEnough.age >= 18 ? `${oldEnough.name} can go to The Matrix` : `${oldEnough.name} is under age!`) 
}
console.log(makeStrings([
    { name: "Angelina Jolie", age:80},
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }]
));

function readyToPutInTheDOM(arr){
    return arr.map(toDOM => `<h1>${toDOM.name}</h1><h2>${toDOM.age}</h2>`)
}
console.log(readyToPutInTheDOM([
    { name: "Angelina Jolie", age:80},
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }]
));

function total(arr){
    return arr.reduce(function(final, num){
        final += num
        return final
    })
}
console.log(total([1, 2, 3]))

function stringConcat(arr){
    return arr.reduce(function(final, num){
        final += `${num}`
        return final
    })
}
console.log(stringConcat([1, 2, 3]))

function totalVoters(arr){
    return arr.reduce(function(final, voter){
        if(voter.voted){
            final++
        }
        return final
    }, 0)
}
console.log(totalVoters([
{name: "Bob", age: 30, voted: true},
{name: "Jake", age: 32, voted: true},
{name: "Kate", age: 25, voted: false},
{name: "Sam", age: 20, voted: false},
{name: "Phil", age: 21, voted: true},
{name: "Ed", age: 55, voted: true},
{name: "Tami", age: 54, voted: true},
{name: "Mary", age: 31, voted: false},
{name: "Becky", age: 43, voted: false},
{name: "Joey", age: 41, voted: true},
{name: "Jeff", age: 30, voted: true},
{name: "Zack", age: 19, voted: false}
]));

function shoppingSpree(arr) {
    return arr.reduce(function(final, num){
        final += num.price
        return final
    }, 0)
}
console.log(shoppingSpree([
    {title: "tesla Model 5", price: 90000},
    {title: "4 carot diamond ring", price: 45000},
    {title: "Fancy Hacky Sack", price: 5},
    {title: "Gold fidgit spinner", price: 2000},
    {title: "A second tesla Model 5", price: 90000}
]));

function flatten(arr){
    return arr.reduce(function(final, arrays){
        final += arrays.concat()
        return final
    }, [])
}
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays));

let voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}
];

function voterResults(arr){
    return arr.reduce(function(final, voter){
        if(voter.age <= 25 && voter.voted){
            final.youngVotes++
        }
        if(voter.age <= 25){
            final.youth++
        }
        if(voter.age >=26 && voter.age <= 35 && voter.voted){
            final.midVotes++
        }
        if(voter.age >=26 && voter.age <= 35){
            final.mids++
        }
        if(voter.age >=35 && voter.age <= 55 && voter.voted){
            final.oldVotes++
        }
        if(voter.age >= 35){
            final.olds++
        }
        return final

    }, { youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0 })

}
console.log(voterResults(voters))

function leastToGreatest(arr) {
    return arr.sort((a, b) => a-b)
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))

function greatestToLeast(arr) {
    return arr.sort((a, b) => b-a)
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))

function lengthShort(arr) {
    return arr.sort((a, b) => a.length - b.length)
}
console.log(lengthShort(["dog", "wolf", "by", "family", "eaten"]))

function alphabetical(arr){
    return arr.sort(function(a, b){
        if(a < b){
            return -1
        }
    });
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]))

function byAge(arr) {
    return arr.sort((a ,b) => a.age - b.age)
}
console.log(byAge([
    {name: "Quiet Samurai", age: 22},
    {name: "Arrogant Ambassador", age: 100},
    {name: "Misunderstrood Observer", age: 2},
    {name: "Unlucky Swami", age: 77}
]));