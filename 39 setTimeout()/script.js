// setTimeout() = function in JavaScript that allows you to schedule
//                the exectution of a function after an amount of time
//                (milliseconds
//                Times are approximate (varies on the workload of the JS runtime env.)

//                setTimeout(callback, delay); 
// clearTimeout(timeoutID) = can cancel a timeout before it triggers


let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => window.alert("hello"), 3000);
    console.log("START");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Timeout Cleared");
}
