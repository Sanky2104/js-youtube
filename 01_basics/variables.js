const accountId = 144553
let accountEmail='sanskriti@gmail.com'
var accountPassword='12345'
accountCity = 'Jaipur'
let accountState;

// accountId=2 --> not allowed (assignment to constant)
console.log(accountId);

accountEmail='sans@yahoo.com'
accountPassword='54321'
accountCity="Ddn"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])