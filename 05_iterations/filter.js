const coding = ['java','javascript','python','ruby','cpp']

const values = coding.forEach( (item) => {
    // console.log(item);
    //return 1 // will still return undefined only, because it always returns undefined
} )
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newArr =  myNums.filter( (num) => num > 5 )

let newArr = []
myNums.forEach ((item) => {
    if (item>5){
        newArr.push(item)
    }
} )
console.log(newArr);