const user = {
    username: "sanskriti",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sans"
// user.welcomeMessage()

// console.log(this); it will print {} in this context, but will return the window object in browser (VVVIMP)

// function randomFunc(){
//     let username = "@sans"
//     // console.log(this);
//     // console.log(this.username); // prints undefined as this cant be used in function context but only in object context
// }
// randomFunc()

// const randomFunc = function(){
//     let username = '@sans'
//     console.log(this.username); // also prints undefined
// }
// randomFunc()

// const randomFunc = () => {
//     let username = '@sans'
//     console.log(this) //still prints {}
//     console.log(this.username); //still prints undefined
// }
// randomFunc()

// basic arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "sans"}) //can't return objects without paranthesis

console.log(addTwo(3,4));
