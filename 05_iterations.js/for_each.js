const coding =['js','ruby','python','java','cpp']

coding.forEach( function (item) {
    // console.log(item)
} )

// coding.forEach( (item) => {console.log(item)} )


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => { // it automatically has the item, index and arr
    // console.log(item, index, arr)
} )

const anotherArr = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

anotherArr.forEach( (obj) => {
    console.log(obj.languageName);
} )