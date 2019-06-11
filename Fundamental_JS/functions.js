
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
const capitalize = str => {
    let strs = str.split(' ');
    return strs.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
}
console.log(capitalize('i have a new car.'));

/* 5. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.*/
const findLongest = str => {
    let strArr = str.match(/\w[a-z]{0,}/gi);
    let result = strArr[0];
    for (let i = 0; i < strArr.length; i++) {
        if (result.length < strArr[i].length) {
            result = strArr[i];
        }
    }
    return result;
}
console.log(findLongest('this is my best experience to practice javascript.'));

// second method
const longestWord = word => {
    const longest = word.split(' ').sort((x, y) => x.length > y.length);
    return longest[longest.length - 1];
};
console.log(longestWord('I am a web Developer .'));

/* 6. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.*/
const countVowels = str => {
    let vowelList = 'aeiouAEIOU';
    let vCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelList.indexOf(str[i]) !== -1) {
            vCount += 1;
        }
    }
    return vCount;
};
console.log(countVowels('olen Afganisganilainen'));

// second method
const vowelsCount = str => {
    str = str.toLowerCase();
    let strArr = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (let letter of str) {
        if (strArr.includes(letter)) {
            counter++;
        }
    }
    return counter;
};
console.log(vowelsCount('here is my home'));

/* 7.  Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. */
const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
console.log(isPrime(10));
console.log(isPrime(5));

// second method
const testPrime = n => {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let i = 2; i < n; n++) {
            if (n % i === 0) return false;
        }
    }
    return true;
};
console.log(testPrime(0));
console.log(testPrime(37));


/* 8. Write a JavaScript function which accepts an argument and returns the type.  */
const typeCheck = str => typeof str;
console.log(typeCheck('m'));
console.log(typeCheck(2));
console.log(typeCheck(null));
console.log(typeCheck());
console.log(typeCheck(true));

/* 9. Write a JavaScript function which will take an array of numbers stored and find the second lowest and
 second greatest numbers, respectively.*/
const secondLowestGreatest = numArr => {
    numArr.sort((x, y) => x - y);
    let item = [numArr[0]];
    let result = [];
    for (let i = 1; i < numArr.length; i++) {
        (numArr[i - 1] !== numArr[i]) ? item.push(numArr[i]) : 0;
    }
    result.push(item[1], item[item.length - 2]);
    return result.join(' - ');
};
console.log(secondLowestGreatest([1, 2, 3, 4, 5, 6]));

// second method
const findSecondLowestGreatest = arr => {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}
console.log(findSecondLowestGreatest([33, 44, 66, 33, 66, 44, 11, 77]));

/* 10. Write a JavaScript function to compute the factors of a positive integer. */
const findFactor = n => {
    const factors = [];
    for (let i = 0; i <= Math.ceil(n / 2); i++) {
        (n % i === 0) ? factors.push(i) : null;
    }
    (factors.indexOf(n) === -1) ? factors.push(n) : null;
    return factors;
};
console.log(findFactor(15));
console.log(findFactor(28));
console.log(findFactor(17));

/* 11. Write a JavaScript function to convert an amount to coins.*/
const amountToCoins = (amount, coins) => {
    const res = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            res.push(coins[i]);
        }
    }
    return res.join(' - ');
}
console.log(amountToCoins(46, [25, 5, 2, 1]));
console.log(amountToCoins(13, [10, 5, 2, 1]));

/* 12.  Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.*/

