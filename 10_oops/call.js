function setUsername(username){
    this.username = username
    console.log('called')
}

function createUser(username, email, password){
    setUsername.call(this, username) // agar call nahi use karenge, toh execution ke baad, variable ka reference hold nahi ho pata, and agar this nahi denge, toh execution ke baad humara execution context hat jaayega and username bhi hat jaayega, thats why we provide 'this' as a parameter, so that humare createUser function ke execution context me username ki value store ho and na ki setUsername wale function me (because after its execution completes, uska reference toh hat jaayega)
    this.email = email
    this.password = password
}

let user1 = new createUser('sans', 'sans@email.com', '12345')
console.log(user1);