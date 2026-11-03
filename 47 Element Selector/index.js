// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST
// HTML collections are live whereas NODELISTs are static

const myHeading = document.getElementById("my-Heading");

myHeading.style.textAlign = "center";

//const fruits = document.getElementsByClassName("fruits");

///console.log(fruits);
//fruits[0].style.backgroundColor = "green";
//fruits[1].style.backgroundColor = "orange";
//fruits[2].style.backgroundColor = "yellow";

//for(let fruit of fruits){
//    fruit.style.backgroundColor = "yellow";
//}


//Array.from(fruits).forEach(fruit => {
//    fruit.style.backgroundColor = "yellow";
//});

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

//h4Elements[0].style.backgroundColor = "yellow";

//for(let h4Element of h4Elements){
//    h4Element.style.backgroundColor = "yellow";
//}

//for (let liElement of liElements){
//    liElement.style.color = "blue";
//}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

//Array.from(liElements).forEach(liElement => {
//    liElement.style.backgroundColor = "red";
//    liElement.style.color = "blue";
//});

const element = document.querySelector(".fruits");

//element.style.backgroundColor ="yellow";


const foods = document.querySelectorAll("li")

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})
