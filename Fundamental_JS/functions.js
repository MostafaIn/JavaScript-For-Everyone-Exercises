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
console.log(isPalindrome('A man, a plan, a canal. Panama'));


/* 3. Write a JavaScript function that returns a passed string with letters in alphabetical order.*/
const alphabeticalOrder = word => word.toString().split('').sort().join('');
console.log(alphabeticalOrder('mostafa '));
console.log(alphabeticalOrder(54374563424));


/* 4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.*/
const firstLetterUppercase = word => {
    let wordArr = word.split(' ');
    let newWordArr = [];
    for (let i = 0; i < wordArr.length; i++) {
        newWordArr.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1).toLowerCase());
    }
    return newWordArr.join(' ');
}
console.log(firstLetterUppercase('my name is mostafa'));
console.log(firstLetterUppercase('MOSTAFA'));

// second method
const capitalize = str => {
    let strs = str.toLowerCase().split(' ');
    return strs.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
}
console.log(capitalize('i have a new car.'));
console.log(capitalize('MOSTAFA.'));


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


/* 12.  Write a JavaScript function to compute the value of b **n where n is the exponent and b is the bases. Accept b and n from the user and display the result.*/
const powered = (b, n) => b ** n;
console.log(powered(3, 2));
console.log(powered(5, 3));


/* 13. Write a JavaScript function to extract unique characters from a string. */
const uniqueChar = str => Array.from(new Set(str)).join('');
console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'));
console.log(uniqueChar('this is my name here'));


/* 14. Write a JavaScript function to  get the number of occurrences of each letter in specified string. */
const countChar = str => {
    let countArr = {};
    str.replace(/\S/g, (l) => countArr[l] = (isNaN(countArr[l] ? 1 : countArr[l] + 1)));
    return countArr;
}
console.log(countChar('the brown dog'))


/* 15. Write a function for searching JavaScript arrays with a binary search. */
const binarySearch = (arr, item) => {
    let middleItem = Math.floor(arr.length / 2);
    if (arr[middleItem] === item) {
        return middleItem;
    } else if (arr.length === 1) {
        return null;
    } else if (arr[middleItem] < item) {
        let newArr = arr.slice(middleItem + 1);
        let result = binarySearch(newArr, item);
        if (result === null) {
            return null;
        } else {
            return middleItem + 1 + result;
        }
    } else {
        let arr1 = arr.slice(0, middleItem);
        return binarySearch(arr1, item);
    }
};
console.log(binarySearch([1, 2, 3, 4, 11, 22, 33, 44], 22));


/* 16.Write a JavaScript function that returns array elements larger than a number. */
const largerThanN = (arr, n) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(largerThanN([22, 33, 11, 44, 55, 66], 33));

/* 17. Write a JavaScript function that generates a string id (specified length) of random characters. */
const makeID = n => {
    let charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = ''
    for (let i = 0; i < n; i++) {
        id += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return id;
}
console.log(makeID(5));


/* 18.  Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. */


/* 19. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. */
const occurrenceLetter = (str, char) => {
    let count = 0;
    for (character of str) {
        if (character === char) count++;
    }
    return count;
}
console.log(occurrenceLetter('my name is mostafa', 's'));

// second method
const occurrenceLetter2 = (str, char) => {
    let strs = str.split('');
    let count = 0;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === char) count++;
    }
    return count;
}
console.log(occurrenceLetter2('this is mostafa. I am a junior web developer.', 'e'));


/* 20. Write a JavaScript function to find the first not repeated character. */
const notRepeatedChar = (str) => {
    for (let ch of str) {
        if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
    }
    return 'there is no unique character in here!';
}
console.log(notRepeatedChar('this is my name, that write here.'));
console.log(notRepeatedChar('abacddbec'));


/* 21. Write a JavaScript function to apply Bubble Sort algorithm. */
const listArr = [23, 35456, 676, 34, 678, 24, 578, 3343, 684, 4, 35, 65];
const bubbleSort = list => {
    let temp;
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] < list[j]) {
                temp = list[i]
                list[i] = list[j]
                list[j] = temp
            }
        }
    }
    return list;
};
console.log(bubbleSort(listArr));

// second method
const sorting = list => list.sort((a, b) => b - a);
console.log(sorting(listArr));


/* 22. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. */
const longestCountryName = list => {
    const longestName = list.sort((a, b) => (a.length > b.length) ? -1 : 1).pop();
    return longestName;
}
console.log(longestCountryName(['Afghanistan', 'Pakistan', 'India', 'Iran']));

// second method
const longestCountryName2 = list => {
    let longestName = '';
    for (let i of list) {
        (i.length > longestName.length) ? longestName = i : null;
    }
    return longestName;
}
console.log(longestCountryName2(["Finland", "Sweden", "Norway", "Denmark"]));


/* 23. Write a JavaScript function to find longest substring in a given a string without repeating characters. */
const longestSubstring = str => {
    let longest = '';
    let l = str.length;
    for (let i = 0; i < l; i++) {
        let newStr = '';
        let counter = 0;
        while (newStr.includes(str[i]) === false) {
            if (i === l) break;
            newStr += str[i];
            i++;
            counter++;
        }
        i -= counter;
        if (newStr.length >= longest.length) {
            longest = newStr
        }
    }
    return longest;
}
console.log(longestSubstring('example.com'));
console.log(longestSubstring('google.com'))

// second method
const longestSub = str => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (newStr.indexOf(str[i]) === -1) {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(longestSub('the way , this is mostafa'));
console.log(longestSub('example.com'));
console.log(longestSub('google.com'));


/* 24. Write a JavaScript function that returns the longest palindrome in a given string.*/
const note = '"HYT BCABA DEd FGHA BCD EDCBA GHThg FYWYF 12332 456 789 876 54 renner WE TYG DE"';
console.log(note.split(' '));
const longestPalindrome = str => {
    let strs = str.split(' ');
    let p = [];
    for (let i = 0; i < strs.length; i++) {
        if (isPalindrome(strs[i])) {
            p.push(strs[i]);
        }
    }
    let is = p.sort((a, b) => (a.length > b.length) ? 1 : -1).pop();
    return is;
}
console.log(longestPalindrome(note));


/* 25. Write a JavaScript program to pass a 'JavaScript function' as parameter. */
const test = (a, b, op) => op(a, b);
const sum = (a, b) => a + b;
console.log(test(2, 3, sum));

// second method
const callME = () => {
    return me();
}
const me = () => {
    let i = 'this is me';
    return i;
}
console.log(callME());


/* 26. Write a JavaScript function to get the function name. */
function mostafa() {
    console.log(arguments.callee.name);
}
mostafa();


