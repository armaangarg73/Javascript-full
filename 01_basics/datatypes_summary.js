// Primitive

// 7 types : string , number , boolean , null , undefined , symbol , BigInt

const score = 100 ;//->  type - number
const scoreValue = 100.3 ; //-> type - number

const isLoggedIn = false ; //-> type - boolean
const outsideTemp = null ; //-> type - object
let userEmail ; //-> type - undefined

const id = Symbol("123"); //-> type - symbol
const anotherId = Symbol("123"); //-> type - symbol

console.log(id===anotherId); // false 
const bigNumber = 3452678916373892646n; //-> bigInt

// Reference(non-Primitive)
// Array , object , function

const heroes = ["IronMan" , "SpiderMan" , "BatMan" , "SuperMan"]; //->type - Object

let myObj = { //-> type - object
    name : "Armaan ",
    age : 19 ,
}

const myFunction = function() { //-> type - function
    console.log("Hello World");
}

console.log(typeof outsideTemp); 