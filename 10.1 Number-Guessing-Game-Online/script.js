//Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum;
const intro = document.getElementById("hello");
const btn1 = document.getElementById("btn1");
const num = document.getElementById("input");
const result = document.getElementById("answer");


let attempts = 0;
let guess;

intro.textContent = `Hello User! Please guess a number between ${minNum} through ${maxNum}`;

btn1.onclick = function(){
    guess = Number(num.value);
    if(isNaN(guess)){
        result.textContent = `Please enter a Valid Number`;

    }else if(guess < minNum || guess > maxNum){
        result.textContent = `Please enter a number in the correct bounds!`;

    }else{
        attempts++
        if(guess<answer){
            result.style.color = 'red';
            result.textContent = `TOO LOW! PLEASE TRY AGAIN!`;
        }else if(guess > answer){
            result.style.color = 'red'
            result.textContent = `TOO HIGH! PLEASE TRY AGAIN!`;
        }else{
            result.style.color = 'green'
            result.textContent = `WELL DONE USER!! The Answer was ${answer} and it only took you ${attempts} attempts!`;

        }
    }
   
}
