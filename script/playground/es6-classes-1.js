class Person {
    constructor(name = "Annonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreetings() {
        return `Hi, ${this.name} !!!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year's old !!!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

const me = new Student("Amol Gaikwad", 27, "Computer Science");
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student("Andrew Mead", 24, "Electrical Engineer");
console.log(other.hasMajor());
console.log(other.getDescription());

// Traveler ==> Person 
// Add support for homeLocation 
// Override getGreeting
// 1. Hi I am Andrew Mead. I'm visiting from Philadelphia. 
// 1. Hi I am Andrew Mead.

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreetings() {
        let greetings = super.getGreetings();

        if (this.homeLocation) {
            greetings += ` I'm visiting from ${this.homeLocation}`;
        }

        return greetings;
    }
}

const traveler1 = new Traveler("Random Traveller1", 28, "India");
const traveler2 = new Traveler(undefined, 28);
console.log(traveler1.getGreetings());
console.log(traveler2.getGreetings());
