//functions 
// section of reusable code
//  Declare code once, use it whenever
//  Call the function to execute the code.



function add(x,y){
    
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function mult(x,y){
    return x*y;
}

function div(x,y){
    return x/y;
}

function isEven(number){
    return number % 2 ===0? true : false;
}

function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{

    return false;
    }

}


console.log(isValidEmail("hennyig22@gmail.com"));
