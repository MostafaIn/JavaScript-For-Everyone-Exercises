////////// 11. Array
console.log("********** 11. ARRAY **********");


// 2. Declare an array with more than 5 number of items
const arrayNumbers = [12, 23, 34, 45, 56, 67, 78, 89, 90];
console.log(arrayNumbers);

// 3. Find the length of your array
console.log(arrayNumbers.length + " items in this array.");

// 4. Get the first item, the middle item and the last item of the array
console.log(" the first item of array is = " + arrayNumbers[0]);

const middleItem = arrayNumbers[Math.floor(arrayNumbers.length / 2)];
console.log("the middle item of the array is = " + middleItem);
const lastItem = arrayNumbers[Math.floor(arrayNumbers.length) - 1];
console.log("the last item of array is = " + lastItem);

// 5. Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5
const mixedDataTypes = [
    "fruits",
    12,
    "bicycle",
    34,
    true,
    "moomi",
    false,
    2333
];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

/* 6. Declare an array  variable name itCompanies and assign initial values 
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. */
// 7. Print the array using console.log()
var itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
];
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(`there are ${itCompanies.length} companies are listed here!`);

// 9. Print the first company, middle and last company
console.log(
    itCompanies[0].toUpperCase() + " is the first company in this list."
);
var middleCo = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(middleCo.toUpperCase() + " is in the middle of this list.");
var lastCo = itCompanies[Math.floor(itCompanies.length - 1)];
console.log(lastCo.toUpperCase() + " is the last company name in the list.");

// 11. Change every company to uppercase and print them out
for (var i = 0; i < itCompanies.length; i++) {
    console.log(i + 1 + " " + itCompanies[i].toUpperCase()); // i+1 execute a number in front of each item.
}
console.log("  ***** now the items in uppercase. *****");

// 12. Print the array like a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString() + " are big companies in the world.");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
function checkCo() {
    let itCo = "Microsoft";
    if (itCompanies.includes(itCo)) {
        console.log(`${itCo} is exist in the list. :)`);
    } else {
        console.log(`${itCo} is not found in the list. :(`);
    }
    return itCo;
}
checkCo();

// 14. Filter out companies which have more than two ‘o’ without the filter method

for (var o = 0; o <= itCompanies.length; o++) {
    if (itCompanies[o].includes("oo")) {
        console.log(itCompanies[o] + " contain oo .");
        break;
    } else {
        console.log("no item match.");
    }
}

// 15. Sort the array using sort() method
console.log(
    " sorted the items in ascending order(using sort()). => " + itCompanies.sort()
);

// 16. Reverse the array using reverse() method
console.log(
    " sorted the items in descending order(using reverse()). => " +
    itCompanies.reverse()
);

// 17. Reverse the array without reverse() method
for (let i = itCompanies.length - 1; i >= 0; i--) {
    console.log(itCompanies[i]);
}

// 18. Slice out the first 3 companies from the array
const sliceOutitCoFirst = itCompanies.slice(3);
console.log(sliceOutitCoFirst);
// 19. Slice out the last 3 companies from the array
const sliceOutLast = itCompanies.slice(0, -3);
console.log(sliceOutLast);
// 20. Slice out the middle IT company or companies from the array
const midIdCo = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(midIdCo);

// 21.Remove the first IT company from the array
console.log(itCompanies);
// console.log(itCompanies.shift());
console.log(itCompanies);

// 22. Remove the middle IT company or companies from the array
var middleitCo = itCompanies[Math.floor(itCompanies.length / 2)];
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i] === middleitCo) {
        console.log(itCompanies.splice(i, 1));
        // console.log(itCompanies);
    }
}
console.log(itCompanies);
// 23. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 24. Remove all IT companies
console.log(itCompanies.splice());

console.log(" ");
