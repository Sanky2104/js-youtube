// constructor se HUMESHA singleton object banega
// jab literals ki tarah objects declare karte hain, toh singleton NAHI banta hai

// Singleton Objects
//Object.create()

//obect lietrals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Sanskriti",
    "full name": "Sanskriti Gupta",
    // mySymbol: "mykey1", // this is wrong way
    [mySymbol]: "mykey1", //correct way to insert symbol into object
    age: 22,
    email: "sanskriti@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]); //when printing symbol value, no need to write doble quotes around the symbol like in other keys
// console.log(typeof jsUser["mySymbol"]);

// jsUser.email = "abc@gmail.com"
// console.log(jsUser);
// Object.freeze(jsUser) // used to lock the object, so that its values can't be changed
// jsUser,email = "new_email@gmail.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS User");
}


jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}

// console.log(jsUser.greeting); //prints [Function (anonymous)], this is basically a function reference (here, function is not executed)
// console.log(jsUser.greeting()); // executes the function ( and then prints undefined in this case, as console.log() returns the output of the function, which in this case, there isn't any)

console.log(jsUser.greeting());
console.log(jsUser.greeting2());