// ES6 Module = An external file that contains reusable code
//              that can be imported into other JS files
//              Write reusable code for many different apps

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const area = getArea(10);
const circ = getCircumference(10);
const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm^3`);
console.log(`${circ.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
