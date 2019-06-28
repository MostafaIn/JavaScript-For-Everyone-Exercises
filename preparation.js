
// 1. Looping a triangle Write a loop that makes seven calls to console.log to output the following triangle;
const loopTriangle = (char, times) => {
  let character = '';
  while (times > 0) {
    character += char;
    times--;
  }
  return character;
}
console.log(loopTriangle('$', 7));

const loopTriangle2 = (c, t) => {
  let char;
  for (let i = 1; i <= t; i++) {
    for (let j = 1; j < i; j++) {
      char += c;
    }
    console.log(char);
    char = '';
  }
  return char;
}
loopTriangle2('*', 10);

/* 2. FizzBuzz Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5(and not 3),
    print "Buzz" instead.When you have that working, modify your program to print "FizzBuzz" for numbers 
that are divisible by both 3 and 5(and still print "Fizz" or "Buzz"for numbers divisible by only one of those).*/
const FizzBizz = () => {
  let list = [];
  for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0) {
      list.push(i + 'Fizz');
    } else if (i % 5 === 0) {
      list.push(i + 'Bizz')
    } else {
      list.push(i + 'FizzBizz')
    }
  }
  return list;
}
console.log(FizzBizz());

/* 3. Maximum Math.max returns its largest argument. We can build something like that now.
Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method.*/
const listN = [12, 34, 45, 2443, 13, 404, 43];
const findMax = arr => Math.max(...arr);
console.log(findMax(listN));

const findMax2 = (e1, e2, e3) => {
  if (e1 > e2 && e1 > e3) {
    return e1
  } else if (e2 > e1 && e2 > e3) {
    return e2
  } else if (e3 > e1 && e3 > e2) {
    return e3
  } else {
    return 0
  }
}
console.log(findMax2(1112, 22223, 45));



/* 4. Reversing an array Arrays have a reverse method which changes the array by inverting the order in which
its elements appear. For this exercise, write a function, reverseArray. The reverseArray,
takes an array as argument and produces a new array that has the same elements in the inverse order.
Without reverse method.*/
const revArr = arr => {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}
console.log(revArr(listN));


/* 5. Modifying an array Write a function called modifyArray takes array as parameter and modifies
the fifth item of the array and returns the array. If the array length is less than five it return ‘item not found’.*/
const modifyArr = arr => {
  if (arr.length < 5) {
    return 'item not found!';
  } else {
    arr.splice(4, 1, 'fifth');
  }
  return arr;
}
console.log(modifyArr(listN));

/* 6. .Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique*/
const randArr = () => {
  let arrRandom = [];
  while (arrRandom.length < 7) {
    const r = Math.floor(Math.random() * 9);
    if (!arrRandom.includes(r)) {
      arrRandom.push(r);
    }
  }
  return arrRandom;
}
console.log(randArr());


/* 7. Write a function which takes any number of arguments and return the sum of the arguments.*/
const sumArgs = (...arr) => {
  let total = 0;
  for (item of arr) {
    total += item;
  }
  return total;
}
console.log(sumArgs(12, 34, 44, 2, 2, 35, 45, 46));


/* 8. Write a function which removes items from the middle of an array and replace with three items.*/
const list8 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
console.log(list8);
const removeFromMid = (arr, ...replace) => {
  let midItem = (arr.length - 1) / 2;
  let cMid = Math.floor(midItem) !== Math.ceil(midItem) ? 2 : 1;
  arr.splice(midItem, cMid, ...replace);
  return arr;
}
console.log(removeFromMid(list8, "mina", "sina"));


/* 9. Calculate the total annual income of the person by extracting the following text.*/
const c9 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.split(/\W+/);
console.log(c9);

const totalAnnualIncome = () => {
  let salary = parseInt(c9[2]);
  let bonus = parseInt(c9[8]);
  let courses = parseInt(c9[12]);
  let totalIncome = (salary * 12) + bonus + (courses * 12);
  return `${totalIncome}€`;
}
console.log(totalAnnualIncome());



/* 10. Create a function that takes two strings and returns true if the first argument ends with the second argument;
otherwise return false . Take two strings as arguments. Determine if second string matches ending of first string.
Return boolean value.*/
const matchStrs = (str1, str2) => str1.endsWith(str2);
console.log(matchStrs('mostafa', 'tafa'));

const matchStrs2 = (str1, str2) => (str1.substr(- str2.length) === str2) ? true : false;
console.log(matchStrs2('rohy', 'hy'));



/* 1. Write a function which count the number of occurrence of words in a paragraph or a sentence.
The function countWords takes a paragraph and two words as parameters.
It compare which word is most frequently occurred in the paragraph.*/
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
const countWords = (p, w1, w2) => {
  let paras = p.split(" ");
  let countW1 = 0;
  let countW2 = 0;
  for (let word1 of paras) {
    if (word1.includes(w1)) countW1++;
  }
  for (let word2 of paras) {
    if (word2.includes(w2)) countW2++;
  }
  if (countW1 > countW2) {
    return `${w1} (${countW1}) BUT ${w2} (${countW2})`;
  } else {
    return `${w2} (${countW2}) BUT ${w1} (${countW1})`;
  }
}
console.log(countWords(paragraph, 'I', 'love'));


// 2. Write a function which takes an array parameter and returns an array of the data types of each item:
const arr2 = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }];
const itemTypes = arr => {
  // let newArr= [];
  // arr.forEach( e => newArr.push(typeof e));
  // return newArr;
  arr.map(i => typeof i);
}
console.log(itemTypes(arr2));


// 3. Create a function which filter ages greater than 18.
const ages = [35, 30, 17, 18, 15, 22, 13, 16, 20];
const filterAges = list => list.filter(age => age > 18);
console.log(filterAges(ages));



// 4. Write a function which calculate the average age of the group.
const avgOfAges = list => {
  // let avg = 0;
  let total = 0;
  for (let i of list) {
    total += i;
  }
  return avg = (total / list.length).toFixed(2);
}
console.log(avgOfAges(ages));



// 5. Write a function named shuffle, it takes an array parameter and it returns a shuffled array. 
const shuffleArr = arr => {
  let currentIndex = arr.length;
  let randIndex, temp;
  while (currentIndex !== 0) {
    randIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temp = arr[currentIndex]
    arr[currentIndex] = arr[randIndex]
    arr[randIndex] = temp
  }
  return arr;
}
console.log(shuffleArr(ages));


// Write a function which remove an item or items from the middle of the array and replace with two items
const iList = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10'];
const removeItems = (arr, item1, item2) => {
  let midItem = (arr.length - 1) / 2;
  let mid = Math.floor(midItem) !== Math.ceil(midItem) ? 2 : 1;
  arr.splice(midItem, mid, item1, item2);
  return arr;
}
console.log(removeItems(iList, "iI", "iII"));


// 6. Write a function which can generate a random Finnish car code.
const finnishCarCode = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  let l = '';
  let n = '';
  for (let i = 0; i < 3; i++) {
    l += letters.charAt(Math.floor(Math.random() * letters.length));
    n += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  let carCode = `${l} - ${n}`;
  return carCode;
}
console.log(finnishCarCode());


/* 7. The following shopping cart has four products.
Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
console.log(shoppingCart.indexOf('Tea'));
const addProduct = (arr, p) => {
  arr.splice(0, 0, p);
  return arr;
}
console.log(addProduct(shoppingCart, 'Apple'));
/* ****************************************** */
const removeProduct = (arr, p) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    p = p.toLowerCase();
  }
  if (!arr.includes(p)) {
    return `this product not in the shoppingCart`;
  } else {
    let r = arr.indexOf(p);
    arr.splice(r, 1);
    return arr;
  }
}
console.log(removeProduct(shoppingCart, 'apple'));
/* ****************************************** */
const editProduct = (arr, p, newP) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    p = p.toLowerCase();
  }
  if (!arr.includes(p)) {
    return `this product not in the shoppingCart`;
  } else {
    let r = arr.indexOf(p);
    arr.splice(r, 1, newP);
    return arr;
  }
}
console.log(editProduct(shoppingCart, 'Coffee', 'Kahvi'));
/* ****************************************** */
const removeAllProducts = arr => {
  arr.splice(0, arr.length);
  return arr;
}
console.log(removeAllProducts(shoppingCart));




/* 8. The following todoList has three tasks.
Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll functions to modify the todoList.*/


// 9. Write a function which check if items of an array are unique?

const numArr = [23, 342, 45, 4, 34, 233, 43, 4];
const uniqArr = arr => {
  let unique = true;
  for (let i = 0; i < arr.length; i++) {
    // arr[i] = arr[i].toString();
    if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
      unique = false;
    }
  }
  return unique;
}
console.log(uniqArr(numArr));

/* 10. Write a function which filter users who has scoresGreaterThan85,
Write a function which addUser to the user array only if the user does not exist.
Write a function which addUserSkill which can add skill to a user only if the user exist.
Write a function which editUser if the user exist in the users array.*/



/* ========================================= QUESTION 9 =======================================================
  The following todoList has three tasks.
  Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll functions to modify the todoList.
  const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/3/2019 8:30',
    completed:true

  },
  {
    task:'Give JS Test',
    time:'4/3/2019 10:00',
    completed:false

  },
  {
    task:'Assess Test Result',
    time:'4/3/2019 1:00',
    completed:false

  }]
========================================================================================================= */



/* ====================== QUESTION 11 ==========================================================
   Write a function named shuffle, it takes an array parameter and it returns a shuffled array.
  ============================================================================================= */
const nameArr = ['mosi', 'rohy', 'edi', 'mori', 'feri'];
const shuffledArr = arr => {
  let cIndex = arr.length;
  let temp, randIndex;
  while (cIndex !== 0) {
    randIndex = Math.floor(Math.random() * cIndex);
    cIndex--;
    temp = arr[cIndex]
    arr[cIndex] = arr[randIndex]
    arr[randIndex] = temp
  }
  return arr;
}
console.log(shuffledArr(nameArr));


/* 1. Create a function which solve quadratic equation ax2 + bx + c = 0.
A quadratic equation may have one, two or no solution.
The function should return a set of the solution(s).*/
const qEq = (a = 1, b = 0, c = 0) => {
  if(a === 0){
    return "this is not a quadratic equation";
  }` this is not a quadratic equation`;
  let delta = (b ** 2 - 4 * a * c);
  let root1, root2;
  let solutionSet = new Set();
  if (delta === 0) {
    root1 = -b / (2 * a);
    solutionSet.add(root1);
  } else if (delta > 0) {
    root1 = ((-b + Math.sqrt(delta)) / 2) * a;
    root2 = ((-b - Math.sqrt(delta)) / 2) * a;
    solutionSet.add(root1);
    solutionSet.add(root2);
  }else{

  }
return solutionSet;
}
console.log(qEq(0,1,2));




// 2. Create a function called isPrime which check if a number is prime or not.


/* 3. Write a function rangeOfPrimes.
    It takes two parameters, a starting number and an ending number .
    The function returns an object with properties primes and count.
    The primes value is an array of prime numbers and
    count value is the number of prime numbers in the array.*/


/* 4. Create a function called isEmpty which check if the parameter is empty.
    If the parameter is empty, it returns true else it returns false.*/
const isEmpty = data => {
  return (
    data === null ||
    data === undefined ||
    (typeof data == 'number') ||
    (typeof data === 'string' && data.trim().length === 0) ||
    (typeof data === 'object' && Object.keys(data).length === 0)
  );
}
console.log(isEmpty(''));
console.log(isEmpty('Asabeneh'));
console.log(isEmpty(['HTML', 'CSS', 'JS']));
console.log(isEmpty({ name: 'Asabeneh', age: 200 }));


/* 5. a. Create a function called reverse which take a parameter and it returns the reverse of the parameter.
   Don't use the built in reverse method.
  b. Create a function called isPalindrome which check if a parameter is a palindrome or not.
    Use the function from a to reverse words.*/


/* 6. Create a function called countPalindrowWords which counts the number of palindrome words in
the palindoromeWords array or in any array.*/


// 7. Count the number of palindrome words in the following sentence.


/* 8. Imagine you are getting the above users collection from a MongoDB database.
a.Create a function called signUp which allows user to add to the collection.
If user exists, inform the user that he has already an account.
    b.Create a function called signIn which allows user to sign in to the application. */


/* 9. The products array has three elements and each of them has six properties.
    a. Create a function called rateProduct which rates the product
    b. Create a function called averageRating which calculate the average rating of a product*/


/* 10.Create a function called likeProduct.
This function will helps to like to the product if it is not liked and remove like if it was liked.*/





