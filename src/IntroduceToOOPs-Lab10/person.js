class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Person Information:\nName: ${this.name}\nAge: ${this.age}\nCountry: ${this.country}`);
    }
}

// Creating two Person objects
const person1 = new Person("John Doe", 30, "USA");
const person2 = new Person("Jane Smith", 25, "Canada");

// Displaying information about both persons
person1.displayInfo();
person2.displayInfo();