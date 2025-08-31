var c = "sans"
let a  = 300
let testGlobalScope = "i am a global variable"

if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner:", a);
    console.log(testGlobalScope);
}

console.log(a); //prints 300 as it should
// console.log(b); //give error as it should
console.log(c); //prints 30 instead of sans, thus shouldn't be used (as it doesnt follow scope)