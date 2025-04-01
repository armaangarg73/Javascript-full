const name = "Armaan" ;
const repoCount = 6 ;

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);

const gameName = new String('Armaan-hc-com'); 

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(1,4);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const trimString = "    Armaan  Garg " ;
console.log(trimString);
console.log(trimString.trim());

const url = "https://armaan.in/armaan%20garg";

console.log(url.replace("%20" , "-"));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));
console.log(gameName.substr(2,4));
console.log(trimString.trimEnd());
console.log(trimString.trimStart());

const stringObj = new String("foo");

console.log(stringObj);

console.log(stringObj.toString());

const para = "A quick brown jumps over a lazy dog";
console.log(para.replace('dog' , 'turtle'));
