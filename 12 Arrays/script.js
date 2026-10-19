//arrays = a variable like structure that can hold
//         more than 1 value

let fruits = ["orange","apple","banana", "coconut"];
let numofFruits = fruits.length;

//fruits.sort().reverse();
for(let i =0; i < fruits.length(); i++){
  console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}
