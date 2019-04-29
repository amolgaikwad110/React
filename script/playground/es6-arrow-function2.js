// arguments object is no longer bound with arrow functions
// so when your are using arrow functions you are no longer has access to arguments objects
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(1, 55, 10000));
// this keyword is no longer bound

const user = {
    name: "Amol Gaikwad",
    cities: ["Mumbai", "Pune", "Nashik", "Aurangabad"],
    printPlacesLived: function () {

        return this.cities.map(city => this.name + " has lived in " + city + "!");

        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // })
    }
}

console.log(user.printPlacesLived());


// challenge 

const multiplier = {
    // numbers -- array of numbers 
    // multiplyBy -- single number 
    // multiply -- return a new array where the number have been multiplied     
    numbers: [
        1, 2, 3
    ],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());