const accountId = 144553;
let accountEmail = "armaan32@gmail.com";
var accountPassword = "2345";
accountCity = "Jaipur";
let accountState;

// accountId = 3;

accountEmail = "arm@gmail.com";
accountPassword = "123456";
accountCity = "Banglore";


console.log(accountId);

/*

Prefer not to use var 
because of issue in block scope and functional scope

*/

console.table([accountId , accountEmail , accountPassword , accountCity,accountState]);