function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("S");
}

// sayMyName()

// function add2Numbers(n1, n2){
//     console.log(n1 + n2);
// }

function add2Numbers(n1, n2){
    return n1 + n2
}

const result = add2Numbers(3, 2)
// console.log("Result:", result);

function loginUserMessage(username="sans"){
    if (!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('@sans'))
// console.log(loginUserMessage()) // prints 'undefined just logged in'

////////////// Functions with unknown paramters ///////////////////////////

function calculateCartPrice(val1, val2,...n1){
    return n1
}
// console.log(calculateCartPrice(200,400,500, 2000));

//////////////// Functions with obejcts /////////////////////////

const user = {
    username: "sans",
    price: 99
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
// handleObject(user)
// handleObject({
//     username: "sanskriti",
//     price: 200
// }) // this also works

///////////// Functions with arrays /////////////////////

const arr = [200, 400, 100, 600]

function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(arr));
//console.log(returnSecondValue([200, 400, 100, 600])); // this also works