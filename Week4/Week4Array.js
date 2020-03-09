// You will write a single function that performs many operations on them.
const fruit = ["bannana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function foodArray(){
    const numOfOrange = fruit.indexOf("orange")
    fruit.push(numOfOrange)
    const lengthOfVeg = vegetables.length;
    vegetables.push(lengthOfVeg)
    const food = fruit.slice(1).concat(vegetables.slice(0,3))
    food.splice(4, 2)
    food.reverse()
    return food
}
const result = foodArray(fruit, vegetables)
console.log(result)




