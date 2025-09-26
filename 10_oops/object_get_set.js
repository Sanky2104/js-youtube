const User = {
    _email: 's@sg.com',
    _password: 123,
    get email(){
        return this._email
    },
    set email(val){
        this._email = val
    },
    get password(){
        return this._password
    },
    set password(val){
        this._password = val
    }
}

const sans = Object.create(User)
console.log(sans.email)
 