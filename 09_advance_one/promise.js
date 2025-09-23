// Promise ek object hota hai

let promiseOne = new Promise(function(resolve, reject) {
    // Do an async task like DB Calls, cryptography related tasks, network calls
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    }, 1000)
})

// promiseOne.then directly corresponds to the resolve part of a promise

promiseOne.then(function(){
    console.log('promise consumed');
})


// Promise without storing it in a variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function(){
  console.log('async task2 resolved');
})

let promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "sans", email:"sans@email.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

let promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = false
        if (!err){
            resolve({username:"sans", password:"12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// chaining
promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(err){
    console.log(err)
})
.finally(() => console.log("promise is either resolved or rejected"))

let promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true
        if (!err){
            resolve({username:"javascript", password:"12345"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try{
        let response = await promiseFive
        console.log(response)
    } catch(error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         let resp = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(resp);
//         let data = await resp.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", errror)
//     }
// }


// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((resp) => {
    return resp.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))