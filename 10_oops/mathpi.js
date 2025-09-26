let desc = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(desc);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const obj = {
    name: 'ginger',
    price: 250,
    isAvailable: true,
    order: function(){
        console.log(`code phat gaya`)
    }
}
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
Object.defineProperty(obj, 'name', {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}