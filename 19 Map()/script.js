// .map() = accepts a callback and applies that function to 
//          each element of an array, then returns a new array


const dates = ["2024-01-10","2025-09-20","2026-03-30","2025-07-21"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;

}
