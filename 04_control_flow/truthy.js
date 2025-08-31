const userEmail = []

if(userEmail){
    console.log("got user email");
} else {
    console.log("don't have user email");
}

//false values below (inke alawa saare values truthy hote hain)
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values (examples)
"0", 'false', " ",[] , {}, function() {}

// code to check if empty object is being passed
const emptyObj= {}
if(Object.keys(emptyObj).length){
    console.log("not empty");
} else {
    console.log("empty obj passed");
}

// Nullish Coalescing Operator (??):null undefined

let val1
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //(here it takes the first non null or non undefined value i.e. 10)
val1 = null ?? undefined // here it taked the undefined value
val1 = null ?? 0 // here it takes 0
console.log(val1)

// Terniary Operator

//condition ? true statement : false statement

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80")