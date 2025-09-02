const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop

for (const element in myObj){
    // console.log(`Value of ${element} is ${myObj[element]}`);
}

// yes, for in loops works with arrays and objects both

const arr = ['abc', "def", "xyz"]
for (const key in arr) {
    // console.log(arr[key]);
}

const map = new Map()
map.set('IN', "India")
map.set("USA", 'United States of America')
map.set('PK', 'Pakistan')
map.set('IN', "India")
// for in loop DOESNT WORK on maps, as maps are NOT ITERABLE
// for (const key in map){
//     console.log(key)
// }