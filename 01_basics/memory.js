// Stack->Primitive  , Heap->Non-Primitive

let myName = "Armaan Garg" ;
let anotherName = "Noni";
anotherName = "Saradar ji"

console.log(myName);
console.log(anotherName) ;

let userOne = {
    email : "armaan25@gmail.com",
    upi:"okhdfc",
}

let userTwo = userOne ;

userTwo.email = "armaan63@google.com" ;

console.log(userOne.email);
console.log(userTwo.email);