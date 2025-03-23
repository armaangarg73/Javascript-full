console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); //false

// === -> strict conversion

console.log("2"===2); // Data type hi alag so , struct conversion me false aata hai , but in case of equality check it is true