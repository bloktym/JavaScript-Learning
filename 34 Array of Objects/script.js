 
// Array of Objects

const fruits = [{name: "apple",color: "red", calories: 95},
                {name: "orange",color: "orange", calories: 45},
                {name: "banana",color: "yellow", calories: 105},
                {name: "coconut",color: "white", calories: 159},
                {name: "pineapple",color: "yellow", calories: 37}]


console.log(fruits);

// ------------ forEach() --------------

fruits.forEach(fruit => console.log(fruit.name));

// ----------- map() -------------------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);


console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// --------------filter() -------------------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCal = fruits.filter(fruit => fruit.calories <= 100);
const highCal = fruits.filter(fruit => fruit.calories >= 100);


console.log(yellowFruits);
console.log(lowCal);
console.log(highCal);

// -------------- reduce() --------------

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit: max); //colon(:) means "otherwise"

const minFruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit: min); //colon(:) means "otherwise"



console.log(maxFruit);
console.log(minFruit);
