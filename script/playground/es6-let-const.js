var nameVar = "Amol";
var nameVar = "Yogesh";
console.log("nameVar", nameVar);

let nameLet = "Amol";
nameLet = "Juile";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// block scoping 
const fullName = "Amol Gaikwad";
let firstName;
if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log("firstName", firstName);
}

console.log("firstName", firstName)