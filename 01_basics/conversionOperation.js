// let score = "98abc";
// let score = true;
// let score = null;
// let score = undefined;

// console.log(typeof score);
// console.log(typeof(score));

// let value = Number(score);
// console.log(typeof value);
// console.log(value);

/*
"98" -> number
"98abc" -> NAN
true -> 1 , false -> 0
*/

// let isLoggedIn = "Armaan" ;
// let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn) ;

/*
1 ->true , 0->false 
"Armaan"-> true
*/

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(someNumber);
// console.log(typeof stringNumber);

// **********Operations**********

let value = 3 ;
let negValue = -value ;

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello" ;
let str2 = " Armaan" ;

let str3 = str1 + str2 ;
// console.log(str3);

// console.log("1" + 2) ;
// console.log(1 + "2") ;
// console.log("1" + 2 + 2) ; // string -> first hai to sbhi ko string dekhenge
// console.log(1 + 2 + "2") ; // string last hai to last se string conversion hoga aur usse pehhle vale apka number hoga

// Bad practices -> code becoming complex
// console.log(+true); //1 
// console.log(+"") ; // 0
 
let gameCounter = 200 ;
// gameCounter++; // Postfix
++gameCounter ;// Prefix
console.log(gameCounter) ;