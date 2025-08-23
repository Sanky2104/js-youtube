// Primitive - 7 types ---> call by value

//String, Number, Boolean, null, undefined, Symbol, BigInt

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id == anotherId);


// Reference Type (Non-Primitive)

//Arrays, Objects, Functions


//////////////////////////////////////////////////////////////////////////////////

//Types of memory - Stack (used in primitive type) and Heap (used in non primitive type)

// in stack --> we get a copy of the value(call by value)
// in heap --> we get a reference of the value (call by reference)

let youtubeName = "Sanskriti"

let anotherName = youtubeName

anotherName = "Gupta"

// console.log(anotherName);
// console.log(youtubeName);


let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userOne.email);
console.log(userTwo.email);