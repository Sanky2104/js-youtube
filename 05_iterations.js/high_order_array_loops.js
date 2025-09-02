// for of

const arr = ["sans","sanskriti","sanky"]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello, world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set("USA", 'United States of America')
map.set('PK', 'Pakistan')
map.set('IN', "India")

// console.log(map);
for (const [key, value] of map) {
    // console.log(`${key}: ${value}`);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [gameId, gameName] of myObj) { // will give error because you can't iterate over objects using for of loops
//     console.log(`game no is ${gameId} and game name: ${gameName}`);
// }

