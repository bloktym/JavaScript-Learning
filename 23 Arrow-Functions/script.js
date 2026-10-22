// arrow functions = a concise way to write function expressions
//                  good for simple functions that you only use once
//                  (parameters) => some code


/*const hello = (name ,age) => console.log(`Hello ${name}\nYou are ${age} years old`);
hello("Henny", 22);
function hello(){
    console.log("Hello!");
}

hello();*/

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 ===0);
const oddNums = numbers.filter((element) => element % 2 !==0);
const total = numbers.reduce((accumulator, element) => accumulator + element);


console.log(total);

