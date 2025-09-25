class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

let sans = new User('sans')
// console.log(sans.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
let user2 = new Teacher('user2', 'user2@email.com')
user2.logMe()
// console.log(user2.createId())