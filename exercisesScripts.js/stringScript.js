console.log("********** 4.STRING **********");
////////// ********** 4.STRING **********
// 7. Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence =
    "You cannot end a sentence with because because because is a conjunction";
let firstPosition = sentence.indexOf("because");
let lastPosition = sentence.lastIndexOf(" is");
console.log(firstPosition);
console.log(lastPosition);

console.log(sentence.substring(firstPosition, lastPosition));

// Declare a variable name company and assign it to an initial value “Integrify Academy”.
var company = "    Integrify Academy";
// a. Print the string  on the browser console using console.log()
console.log(company);
// b. Print the length of the string  on the browser console using console.log()
console.log("the length is = " + company.length + "characters.");
// c. Change all the string to capital letters using toUpperCase() method
console.log(company.toUpperCase());
// d. Change all the string to small letters using toLowerCase() method
console.log(company.toLowerCase());
// e. Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(company.slice(14, 21));
console.log(company.substr(0, 7));
console.log(company.substring(7, 21));
// f. Check if the string contains a word Academy using includes() method
console.log(company.includes("Academy"));
console.log(company.includes("academi"));
// g. Split the string into array using split() method
console.log(company.split());
// h. Split the string Integrify Academy at the space using split() method
console.log(company.split(" "));
// i. “Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon” split at the string at the comma  and change it to an array.
var companies = "Facebook , Google , Microsoft , Apple , IBM , Oracle , Amazon";
console.log(companies.split(", "));
// j. Change Integrify Academy  to Microsoft Academy using replace() method.
console.log(company.replace("Integrify", "Microsoft"));
// k. What is the character at index 10  in ‘Integrify Academy’ string? User charAt()
console.log(company.charAt(15));
// l. What is the character code of A in ‘Integrify Academy’ string using charCodeAt()
console.log(company.charCodeAt("A"));
console.log(company.charCodeAt("a"));
// m. Use indexOf to determine the position of  the first occurrence of e in Integrify Academy
console.log(company.indexOf("e"));
// n. Use lastIndexOf to determine the position of the last occurrence of e in Integrify Academy
console.log(company.lastIndexOf("e"));
// o. Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g “  Integrify Academy   ”.
console.log(company.trim());
// p. Use startsWith() method with the string Integrify Academy make the result true
console.log(company.startsWith(""));
// q. Use endsWith() method with the string Integrify Academy make the result true
console.log("Integrify Academy".endsWith(""));
// r. Use  match() method to find all the a’s in Integrify Academy
console.log(company.match("a"));
// s. Use concat() and merge ‘Integrify’ and ‘Academy’ to a single string, ‘Integrify Academy’
console.log(" Integrify ".concat(" Academy "));
// t. Use repeat() method to print Integrify Academy 5 times
console.log(company.repeat(5));

/* 27. Calculate the total annual income of the person by extract the numbers from the following text.
 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 1500 euro online courses per month.'*/
const incomeText = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.".split(
    " "
);
console.log(incomeText);
let salary = 5000;
let annualBonus = 10000;
let onlineCourses = 1500;
let totalAnnualIncome = salary * 12 + annualBonus + onlineCourses * 12;
console.log(`his annual income is ${totalAnnualIncome}€ totally.`);

console.log(" ");
