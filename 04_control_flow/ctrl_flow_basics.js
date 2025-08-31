// <, >, <=, >=, ==, !=, ===, !==

// !== returns true if the values are different or their types are different.
// !== returns false only if both the value and the type are the same.

// const score = 200

// if (score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000

// // if (balance>500) console.log("test");

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allowed to purchase");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}