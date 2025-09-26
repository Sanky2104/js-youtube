class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email
    }
    set email(val){
        this._email = email
    }
    get password(){
        return `${this._password}sans`
    }
    set password(val){
        this._password = val    }
}

const sans = new User('sans@email.com', 123)
console.log(sans.password)