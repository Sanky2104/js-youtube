// Immediately Invoked Function Expressions (IIFE)

// Global scope ke pollution se kayi baar problem hoti hai, so us global scope ke variables and pollution ko hatane ke liye IIFE ka use karte hain; IIFE should always end with a ; (semi colon) because it doesn't know when to stop the execution context

(function randomFunc(){
    // named IIFE
    console.log('DB CONNECTED');
})();

((name) => {
    //unnamed/ simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("sans")