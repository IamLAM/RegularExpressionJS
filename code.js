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

//When the character ocurrs zero or more 
let extract12 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex12 = /ou*/;
let result12 = extract12.match(codingRegex12);
console.log(result12);

//Matching the first word in the sentence
let extract13 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex13 = /^dont/gi;
let result13 = extract13.match(codingRegex13);
console.log(result13);

//Match ending word
let extract14 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex14 = /worry$/;
let result14 = extract14.match(codingRegex14);
console.log(result14);

//Using shortcut for letters, numers, uppercase, lowercase and underscore. Its necesary to add gi
let extract15 = "dont worry about the thing, every little thing its gonna be all right, dont worry";
let codingRegex15 = /\w/gi;
let result15 = extract15.match(codingRegex15);
console.log(result15);

// (Opposite )Using shortcut for letters, numers, uppercase, lowercase and underscore. Its necesary to add gi
let extract16 = "dont worry about the thing, ### every little thing its gonna be all right, % dont worry";
let codingRegex16 = /\W/gi;
let result16 = extract16.match(codingRegex16);
console.log(result16);

// Searching numbers and counting
let extract17 = "dont worry about the thing, ### 9 every little thing its gonna be all 6 right,555 % dont worry";
let codingRegex17 = /\d/gi;
let result17 = extract17.match(codingRegex17).length;
console.log(result17);

// (Opposite )Searching numbers and counting
let extract18 = "dont worry about the thing, ### 9 every little thing its gonna be all 6 right,555 % dont worry";
let codingRegex18 = /\D/gi;
let result18 = extract18.match(codingRegex18);
console.log(result18);

// Matching whitespace and counting
let extract19 = "dont worry about the thing, ### 9 every little thing its gonna be all 6 right,555 % dont worry";
let codingRegex19 = /\s/g;
let result19 = extract19.match(codingRegex19).length;
console.log(result19);



// (Opposite)Matching whitespace and counting .. its similar to [^ \r\t\f\n\v]. 
let extract20 = "dont worry about the thing, ### 9 every little thing its gonna be all 6 right,555 % dont worry";
let codingRegex20 = /\S/g;
let result20 = extract20.match(codingRegex20).length;
console.log(extract20.length); // whitespace
console.log(result20); //without whitespace

// Specifying number
let extract21 = "dont worryyyyyy, worry, worryyyyy";
let codingRegex21 = /Worry{3,5}/gi;
let result21 = extract21.match(codingRegex21);
console.log(result21); //without whitespace

// Specifying exact number
let extract22 = "dont worryyyyyy, worry, worryyyyy, worryyy";
let codingRegex22 = /Worry{3}/gi;
let result22 = extract22.match(codingRegex22);
console.log(result22); //without whitespace


// Included or not included
let extract23 = "favourite";
let codingRegex23 = /favo?urite/gi;
let result23 = extract23.match(codingRegex23);
console.log(result23); //without whitespace