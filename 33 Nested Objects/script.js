// nested object = Objects inside of other objects
//                 Allows you to represent more complex data structures
//                 Child Object is enclosed by a Parent Object

//                 Person{Address{}, ContactInfo{}}
//                 ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

/*const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch Street",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address.country);


for(const property in person.address){
    console.log(person.address[property])
} */

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

}


class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("SpongeBob", 30,
     "124 Conch Street", "Bikini Bottom", "Int. Water" );


const person2 = new Person("Patrick", 35,
     "128 Conch Street", "Bikini Bottom", "Int. Water" );

const person3 = new Person("Squidward", 45,
     "126 Conch Street", "Bikini Bottom", "Int. Water" );


console.log(person3.age);
