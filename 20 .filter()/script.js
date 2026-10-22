//.filter() = creates a new array by filtering out elements


/*const ages = [16, 17, 18, 18, 19, 20, 60];

const adults = ages.filter(isAdult);
const children = ages.filter(isChild);
console.log(adults);
console.log(children);

function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}*/

const words = ["apples", "donuts", "peaches", "cream", "pineapple",
                "pomegranate"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}


