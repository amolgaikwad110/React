const square = function (x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(774));

// getFirstName('Amol Gaikwad') ==>> 'Amol'
// Create regular arrow function 
// Create arrow function using shorthand 

const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
}

const getFirstNameShort = (fullName) => fullName.split(" ")[0];

console.log("FirstName: " + getFirstName("Amol Gaikwad"));
console.log("FirstNameShort: " + getFirstNameShort("Shivaji Gaikwad"));