// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and web application
//        JSON files {key:vale} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object

/*const jsonnames = ["Spongebob", "Patrick", "Squidward", "Sandy"];




const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                 {"name": "Patrick","age": 34,"isEmployed": false},
                 {"name": "Squidward","age": 50,"isEmployed": true},
                 {"name": "Sandy","age": 27,"isEmployed": false}]`;



const parsedPeople = JSON.parse(jsonPeople);
console.log(parsedPeople);*/

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));
