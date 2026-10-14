// for loop = repeat some code a LIMITED amount of times

let username;

username = window.prompt(`Please enter your username`);
age = window.prompt(`Please enter your age`);

for(let i=1; i <=age; i++){
    console.log(`Hello ${username}`);
    if(username ==""){
        console.log(`L mans! Enter a username`);
        break;
    }
}
