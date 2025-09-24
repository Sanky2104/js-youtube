// let myName = 'sans   '

// console.log(myName.length)

let myHeroes = ['thor','spiderman']

Object.prototype.sans = function(){
    console.log(`sans is present in all objects`)
}

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// heroPower.sans()
// myHeroes.sans()

Array.prototype.heySans = function(){
    console.log(`heySans is present in this object`)
}

// myHeroes.heySans()
// heroPower.heySans() //gives error as heySans is only available in array

// inheritance

let User={
    name: 'sans',
    email:'sans@email.com'
}
let Teacher = {
    makeVideo: true
}
let TeachingSupport = {
    isAvailable: false
}
let TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport can access all properties of Teacher

let anotherUser = 'SanskritiGupta                           '
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`) //this is an obsolete property, hence prints undefined
    console.log(`True length is ${this.trim().length}`)
}

anotherUser.trueLength()
"sans".trueLength()