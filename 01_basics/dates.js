let myDate = new Date()
console.log(myDate);
console.log("toString: ", myDate.toString());
console.log("toISOString: ", myDate.toISOString());
console.log("toJSON: ", myDate.toJSON());
console.log("toLocaleString", myDate.toLocaleString());
console.log("toLocaleDateString: ", myDate.toLocaleDateString())

console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 21)  // ---> months start from 0 in JS

// let myCreatedDate = new Date(2025,0,21,5,3)

// let myCreatedDate = new Date("2025-01-14")
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // in milliseconds
// console.log(myCreatedDate.getTime()) // in milliseconds

// console.log(Math.floor(Date.now()/1000)); // divide by 1000 to get into seconds

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()); // starts from 0

console.log(newDate.toLocaleString('default',{
    weekday:'long'
}))