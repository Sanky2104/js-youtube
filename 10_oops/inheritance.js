class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

let user1 = new Teacher('user1', 'sans@email.com', 123)
user1.addCourse()

let user2 = new User('user2')
// user2.addCourse()
user2.logMe()
user1.logMe()

console.log(user1 === user2);
console.log(user1 === Teacher);
console.log(user1 instanceof Teacher);
console.log(user1 instanceof User);