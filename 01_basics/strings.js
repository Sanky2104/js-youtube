const name = 'Sanskriti'
const repoCount = 12

// console.log(name + repoCount + " Value");

// String Interpolation (like ftsrings in python, use ``, add $ before the variable brackets)

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('sanky_2104_gupta') // creates a string object, which will associate string methods with the created string, also string is am object and nto an array (VIMP, remember this)

// console.log(gameName[0]);

// console.log(gameName);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName); // sanky, not SANKY because string is primitive, and is call by value

console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(3, 7)
console.log(newString);

//substring doesnt accept neg values like slice does

const anotherString = gameName.slice(-5,9) // if start is neg then start = len+start and should be start>=end, else wont work
console.log(anotherString);


const newStringOne = "          sans        "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sans.com/sans%20gupta"
console.log(url.replace('%20','-'))

console.log(url.includes('sans'))

console.log(gameName.split("_"));
