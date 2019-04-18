////////// 10. Loop
console.log("********** 10. LOOP **********");

// a. Iterate 0 to 10 using for loop, do the same using while and do while loop.
console.log("** for loop ");
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
for (var k = 10; k >= 0; k--) {
    console.log(k);
}
console.log("** while loop ");
var j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}
console.log("**** do-while loop ****");
var x = 0;
do {
    console.log(x);
    x++;
} while (x <= 10);

// c. Iterate the array using a for loop and print out the items uppercase.
const itCos = ['mircrosoft', 'ibm', 'apple', 'nokia', 'amazon', 'samsung', 'sony', 'google'];
for (var i = 0; i < itCos.length; i++) {
    console.log(i + 1 + " " + itCos[i].toUpperCase()); // i+1 execute a number in front of each item.
}
/* d. Check if a certain company exists in the ITCompanies array. 
If it exist return the company else return a company is not found. */
console.log("*********************");
var ITCompanies = [
    "apple",
    "ibm",
    "microsoft",
    "itengrify",
    "Digia",
    "moomi",
    "lolo"
];
// var certainCompany = prompt("Enter a popular company name here! ?");
// var firstItem = certainCompany.toLowerCase();

// for (var c = 0; c <= ITCompanies.length; c++) {
//   if (ITCompanies[c] === firstItem) {
//     console.log(firstItem + " is found in the list :)");
//     var found = true;
//     break;
//   }
// }
// if (!found) {
//   console.log(firstItem + " is not found in the list :(");
// }

// 3.Write a loop that makes seven calls to console.log to output the following triangle:
for (let x = 1; x <= 7; x++) {
    const hash = "#";
    console.log(hash.repeat(x));
}

// 4. Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.
const skills = ["HTML", "CSS", "JavaScript"];
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log("#############################################");

// 7. Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`the sum of from 0 to 100 is = ${sum}.`);

// 8. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEvens = 0;
let sumOfOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumOfEvens += i;
    } else {
        sumOfOdds += i;
    }
}
console.log(
    `The sum of from 0 to 100. All evens is ${sumOfEvens}. and the sum of all odds is ${sumOfOdds}.`
);

// forEach loop  *************************************************************
console.log("********* forEach loop ********");
var pN = ["mina", "sina", "han", "me", "te", "he"];
pN.forEach(myFunc);
function myFunc(item, index, array) {
    console.log(index + 1, item);
}

const product=['apple','milk','paper','pc','bread','garlic','onion'];
product.forEach((i, e) => {
    console.log(`${e + 1}.${i}`);
})

console.log(" ");

