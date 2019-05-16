console.log('*****************************  TEST ONE SOLUTION   ***********************************');


// 1. Looping a triangle Write a loop that makes seven calls to console.log to output the following triangle:
for (let i = 1; i <= 5; i++) {
    const c = '*';
    console.log(c.repeat(i));
}


///////////////////////////////////////////
const starTriangle = (char, times) => {
    let character = '';
    while (times > 0) {
        character += char;
        times--;
    };
    return character;
}
console.log(starTriangle('$', 7));

const repeating = (s, t) => {
    // if(t>0){
    //      return s.repeat(t);
    // }else{
    //     return null;
    // }
    return (t > 0) ? s.repeat(t) : null;
}
console.log(repeating('!', 4));


/* 2. FizzBuzz Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers 
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"for numbers divisible by only one of those).*/
const FizzBuzz = () => {
    let FizzBuzz = [];
    for (let i = 1; i <= 100; i++) {
        // console.log(i);
        // FizzBuzz.push(i);
        if (i % 3 === 0) {
            //    console.log(i,'Fizz');
            FizzBuzz.push('Fizz');
        } else if (i % 5 === 0) {
            //   console.log(i,'Buzz');
            FizzBuzz.push('Buzz');
        } else {
            // console.log(i,'FizzBuzz');
            FizzBuzz.push('FizzBuzz');
        }
    }
    return FizzBuzz;
}
console.log(FizzBuzz());

/* 3. Maximum Math.max returns its largest argument. We can build something like that now. 
Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method.*/
const findMax = (r1, r2, r3) => {
    let maxNum = '';
    if (r1 > r2 && r1 > r3) {
        maxNum = r1;
    } else if (r2 > r1 && r2 > r3) {
        maxNum = r2;
    } else if (r3 > r1 && r3 > r2) {
        maxNum = r3;
    } else {
        maxNum = null;
    }
    return maxNum;
}
console.log(findMax(12, 3, 5));

/* 4. Reversing an array Arrays have a reverse method which changes the array by inverting the order in which 
its elements appear. For this exercise, write a function, reverseArray. The reverseArray, 
takes an array as argument and produces a new array that has the same elements in the inverse order. 
Without reverse method.*/
const reverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray(['a', 'b', 'c']));

/* 5. Modifying an array Write a function called modifyArray takes array as parameter and modifies 
the fifth item of the array and returns the array. If the array length is less than five it return ‘item not found’.*/
const modifyArray = (arr) => {
    let mArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length < 5) {
            return 'item not found';
        } else {
            mArr.push(arr[i]);
        }
    }
    return mArr;
}
console.log(modifyArray([1, 2, 3, 4, 5]));
console.log(modifyArray([1, 4, 5]));
console.log(modifyArray(['apple', 'milk', 'kachalo', 'nankhoshk', 'eee']));


/* 6. .Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique*/
function sevenRandomNum() {
    const arr = [];
    while (arr.length < 7) {
        const rand = Math.floor(Math.random() * 9)
        if (!arr.includes(rand)) {
            arr.push(rand)
        }
    }

    return arr;
}
console.log(sevenRandomNum());

/* 7. Write a function which takes any number of arguments and return the sum of the arguments.*/
const sumTotal = (...arr) => {
    let total = 0;
    for (item of arr) {
        total += item
    };
    return total;
}
console.log(sumTotal(3, 2, 5, 15, 34));

//
function sumTotal2() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumTotal2(12, 13, 15));

/* 8. Write a function which removes items from the middle of an array and replace with three items.*/
const removeMiddleItems = (arr, ...replace) => {
    const middItem = (arr.length - 1) / 2;
    const witchOne = Math.floor(middItem) !== Math.ceil(middItem) ? 2 : 1;
    arr.splice(Math.floor(middItem), witchOne, ...replace);
    return arr;
}
console.log(removeMiddleItems([1, 2, 3, 4, 5, 6], 'a', 'b'));
console.log(removeMiddleItems(['I', 'II', 'III', 'IV', 'V'], 3, 4));

/* 9. Calculate the total annual income of the person by extracting the following text.
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'*/
const annualIncome = () => {
    const sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.split(' ');
    const salary = parseInt(sentence[2]);
    const annualBonus = parseInt(sentence[8]);
    const onlineCourses = parseInt(sentence[12]);
    TotalIncome = (salary * 12) + annualBonus + (onlineCourses * 12);
    return TotalIncome;
}
console.log(annualIncome());

/* 10. Create a function that takes two strings and returns true if the first argument ends with the second argument; 
otherewise return false . Take two strings as arguments. Determine if second string matches ending of first string. 
Return boolean value. Example*/

const matchEnd2 = (s1, s2) => {
    let check = true;
    if (s1.slice(-s2.length) !== s2) {
        return check = false;
    }
    return check;
}
console.log(matchEnd2('integrify', 'ify'));
console.log(matchEnd2('integrify', 'fi'));

///
const matchEnd = (s1, s2) => {
    return s1.endsWith(s2);
}
console.log(matchEnd('mostafa', 'afa'));
