
/* 1. Write a JavaScript function that reverse a number*/
const reverseNumber = number => {
    let result = number.toString().split('');
    let reversed = [];
    for (let i = result.length - 1; i >= 0; i--) {
        reversed.push(result[i]);
    }
    return reversed.join('');
}
console.log(reverseNumber(123456));


/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */
const isPalindrome = str => {
    let string = str.toString().split('');
    let lTr = [];
    let rTl = [];
    for (let i = 0; i < string.length; i++) {
        lTr.push(string[i].toLowerCase());
    }
    for (let i = string.length - 1; i >= 0; i--) {
        rTl.push(string[i].toLowerCase());
    }
    if (lTr.toString() === rTl.toString()) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('Noon'));
console.log(isPalindrome('mAdaM'));
console.log(isPalindrome(12121));


/* 3. Write a JavaScript function that returns a passed string with letters in alphabetical order.*/
const alphabeticalOrder = word => word.toString().split('').sort().join('');
console.log(alphabeticalOrder('mostafa '));
console.log(alphabeticalOrder(54374563424));


/* 4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.*/
const firstLetterUppercase = word => {
    let wordArr = word.split(' ');
    let newWordArr = [];
    for (let i = 0; i < wordArr.length; i++) {
        newWordArr.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1));
    }
    return newWordArr.join(' ');
}
console.log(firstLetterUppercase('my name is mostafa'));

// second method
const capitalize = str =>{
    let strs= str.split(' ');
    return strs.map( e=> e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
}
console.log(capitalize('i have a new car.'));

/* 5. */


