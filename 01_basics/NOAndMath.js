const score = 400 ;
console.log(score);

const balance = new Number(100.234) ;
console.log(balance) ;

// console.log(typeof(balance));
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(5));

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.29));
console.log(Math.floor(4.99));
console.log(Math.min(4,8,9,1));
console.log(Math.max(4,8,9,1));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random()*(max-min+1))+min);//+min isliye kyuki atleast 10 to aana hi chahiye

