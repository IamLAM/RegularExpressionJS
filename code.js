//In this course you will learn about regular expressions

let myString = "Good morning, my name is...!";
let myRegex = /name/;
let result = myRegex.test(myString);
console.log(result);

let myString2 = "Good morning, my name is Paola!";
let myRegex2 = /Penelope|Paulina|Pilar|Petronila/; //using or for multiple options
let result2 = myRegex2.test(myString2);
console.log(result2);