const myArray = [0,1,2,3,4,5]

const myArray2 = new Array(1,2,3,4)

// console.log(myArray[0]);

///////// Array Methods/////////////

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));


// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3) //with slice, the original array remains unchanged
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3) // splice manipulates the original array
console.log("C ", myArray);
console.log(myn2);