let user = {
    username: "sans",
    logincount: 3,
    signedIn: true,
    getUserDetails: function(){
        console.log("got user details from database")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails())

// console.log(this) // prints {}, matlab ki global contetxt me this ki value empty hai, browser me however ye value empty nahi aati...because it has window, document, and other prototypes

function userFunc(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}

let userOne = new userFunc("sanskriti", 12, true)
let userTwo = new userFunc("Javascript", 10, false)
// console.log(userOne); // agar new nahi lagate, toh userOne ki values would be overwrite by vslues of userTwo
console.log(userTwo.constructor)

// when we use 'new', an empty object is created, jisko ek instance ya object bolte hain
// new keywork ke kaaran ek constructor function call hota hai
// then 'this' ke through saari values inject ho jaati hain
// then, hume function ke andar, values mil jaati hain

//Read about 'instanceof in javascript'