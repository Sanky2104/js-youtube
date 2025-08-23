const score = 300

const balance = new Number(100.43873467)

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNum = 1123.8966

// console.log(otherNum.toPrecision(3)); // priority is before the decimal point from the left

const newNum = 1000000
// console.log(newNum.toLocaleString('en-IN'));


/////////////////////////////////// Math ///////////////////////////////////////////////


// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.3)); // also have cirl and floor
// console.log(Math.min(4,3,6,8,9)); // Math.max also there

// console.log(Math.random()); // between 0 and 1
// console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))