//In this course you will learn about regular expressions

let myString = "Good morning, my name is...!";
let myRegex = /name/;
let result = myRegex.test(myString);
console.log(result);

let myString2 = "Good morning, my name is Paola!";
let myRegex2 = /Penelope|Paulina|Pilar|Petronila/; //using or for multiple options
let result2 = myRegex2.test(myString2);
console.log(result2);

//ignoring capitalize or variations

let myString3 = "family";
let fccRegex3 = /FAMILY/i; // Change this line
let result3 = fccRegex3.test(myString3);
console.log(result3);

//extracting matches
let extract4 = "dont worry about the thing, every little thing its gonna be all right";
let codingRegex4 = /every/;
let result4 = extract4.match(codingRegex4);
console.log(result4);

//extracting matches and getting several coincidences
let extract5 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex5 = /worry/gi;
let result5 = extract5.match(codingRegex5);
console.log(result5);

//extracting matches and getting several coincidences with dot (.)
let extract6 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex6 = /.on./g;
let result6 = extract6.match(codingRegex6);
console.log(result6);

//matching a data group

let extract7 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex7 = /[aeiou]/gi;
let result7 = extract7.match(codingRegex7);
console.log(result7);

//matching all letters using - and match

let extract8 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex8 = /[a-z]/gi;
let result8 = extract8.match(codingRegex8);
console.log(result8);


//Matching numbers and letters 
let extract9 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex9 = /[a-z0-9]/gi;
let result9 = extract9.match(codingRegex9);
console.log(result9);


/[^aeiou0-9]/;

//Negated numbers and vowels
let extract10 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex10 = /[^aeiou0-9]/gi;
let result10 = extract10.match(codingRegex10);
console.log(result10);

//When the character ocurrs one or more 
let extract11 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex11 = /[ou]+/gi;
let result11 = extract11.match(codingRegex11);
console.log(result11);