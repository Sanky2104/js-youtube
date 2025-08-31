var c = "sans"
let a  = 300
let testGlobalScope = "i am a global variable"

if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner:", a);
    // console.log(testGlobalScope);
}

// console.log(a); //prints 300 as it should
// // console.log(b); //give error as it should
// console.log(c); //prints 30 instead of sans, thus shouldn't be used (as it doesnt follow scope)

//////////////// Scope Level ///////////////////////

// example to understand: chhote log badon se icecream maang sakte hain, lekin bade log chhote logon se icecream nahi maang sakte hain

function one(){
    const username = "sanskriti"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true){
    const username = "sans"
    if (username==="sans"){
        const website = "youtube"
        // console.log(username, website);
    }
    // console.log(website) //---> gives error
}
// console.log(username); //---> gives error


console.log(addOne(5))
function addOne(num){
    return num + 1
}

// addTwo(5) //gives error: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
// addTwo(5)