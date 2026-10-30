// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

/*let numbers = [2, 4, 1, 3, 6, 8, 5, 7, 10, 9];

numbers.sort((a, b) => a - b);

console.log(numbers);*/

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                 {name: "Patrick", age: 37, gpa: 1.5},
                 {name: "Squidward", age: 51, gpa: 2.5},
                 {name: "Sandy", age: 27, gpa: 4.0}];


people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people);
