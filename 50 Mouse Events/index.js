// eventListener = Listen for specific events to create interactive web pages
//                 event: click, mouseover, mouseout
//                 .addEventListener(event, callback(arrow function or anonymous function));

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");


myBtn.addEventListener("click", event =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OHH YEAHHH 😆";
});


myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "DON'T DO IT😨";
});

myBtn.addEventListener("mouseout", event =>{
    myBox.textContent = "Click Me😘";
    myBox.style.backgroundColor = "lightcoral";
})
