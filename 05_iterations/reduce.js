const myNums = [1,2,3]

// let total = myNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

let total = myNums.reduce( (acc, curr) => (acc + curr), 0)

console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python3 course",
        price: 5999
    },
    {
        itemName: "mobile dev course",
        price: 3999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let shoppingCartTotal = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )
console.log(shoppingCartTotal);