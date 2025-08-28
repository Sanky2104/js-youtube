const marvel_heroes =["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) // the dc_heroes array is pushed as a single element

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes) // here, the marvel_heroes array remains unchanged, and a new array is created, which is the result of the concatenation
// console.log(all_heroes);

//Spread Operator--> works like concatenation, but easy to write (also, it can take multiple values whereas concatenate takes only 1 value)
// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);


// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const anotherArray2 = anotherArray.flat(Infinity) //the paramter in the flat is the depth of the flatness
// console.log(anotherArray2);


console.log(Array.isArray("Sanskriti"))
console.log(Array.from("Sanskriti"))
console.log(Array.from({name: "Sanskriti"})) //here it will return an empty array because we haven't specified that we want the array from the keys or the values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));