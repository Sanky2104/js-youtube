const appUser = new Object()
// console.log(appUser); //prints {}
// const appUser2 = {}
// console.log(appUser2); //prints {}

appUser.id = "123abc"
appUser.name = "Sans"
appUser.isLoggedIn = false

// console.log(appUser);

const regularUser = {
    email: "sans@email.com",
    fullName: {
        userFullName: {
            firstname: "sans",
            lastname: "gupta"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d", 2:"e"}
const obj4 = {2:"a"}

// const obj3 = {obj1, obj2} //wrong way

// const obj3 = Object.assign(obj1, obj2) // changes the obj1 directly
// const obj3 = Object.assign({}, obj1, obj2, obj4) // copies into an empty array
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@email.com"
    },
    {
        id:2,
        email:"b@email.com"
    }
]

users[1].email

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('isLoggedIn'));