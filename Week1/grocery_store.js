var shopper = {
    firstName: "Michael",
    lastName: "Salinas",
    age: 30,
    isBuyCandy: false,
    groceryCart: ["cookies","meat","dairy","bread","napkins"],
    fullName : function() {
        return this.firstName + " " + this.lastName + " " + this.isBuyCandy + " " + this.groceryCart;
    }

};
console.log (shopper.fullName());