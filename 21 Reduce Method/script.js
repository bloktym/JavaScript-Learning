// .reduce() = reduce the elements of an array 
//          to a single value

/*const prices = [5, 10, 30, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`R${total}`);

function sum(accumulator, element){
    return accumulator + element;
}
*/
// accumulator is seen as previous element
// element is seen as the next element so we add them.

const grades = [75, 60, 80, 90, 65, 95];


const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){

    return Math.max(accumulator, element);

}

function getMin(accumulator, element){

    return Math.min(accumulator, element);

}
