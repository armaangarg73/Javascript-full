let myDate = new Date() ;
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());

// let myCreatedDate =  new Date(2025 , 3 , 7);
// let myCreatedDate =  new Date(2025 , 3 , 7 , 5 , 4);
let myCreatedDate =  new Date("2025-04-07");
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myTimeStamp.getMonth());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));
// console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getTime());
console.log(newDate.getDate());
console.log(newDate.getTimezoneOffset());


