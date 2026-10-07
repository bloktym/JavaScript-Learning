

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){

    age = Number(myText.value);
    if(age >=100){
    resultElement.textContent = `Old ahh hag`;
}
else if(age >= 18){
     resultElement.textContent = `Your are old enough to enter this site`;
}
else if(age ==0){
    resultElement.textContent =`Bro was just born lol`;
}
else if(age <0){
    resultElement.textContent =`You cant be less than 0 gang`
}

else{
    resultElement.textContent = `You cannot enter gang`;
}
}



 
