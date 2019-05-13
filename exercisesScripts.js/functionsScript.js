////////// 12. Function
console.log("********** 12. FUNCTION **********");


// 1. Declare a function fullName and it print out your full name.

function myName(first_name, last_name) {
    var full_name = first_name + last_name;
    return full_name;
}
console.log(myName("mostafa ", "hazareh."));
console.log(myName("Rohy ", "Dehqanzada."));
console.log(myName("Niini ", "Jiiji"));

/* 2. Declare a function fullName and now it takes firstName, 
lastName as a parameter and it returns your full name. */

function my_name(fName, lName) {
    var full_name = fName + lName;
    return full_name;
}
console.log(my_name("Nicole ", "Kidman")); // call the function to concat the name and also it can

// 3. Declare a function addNumbers and it takes three parameters and it returns sum.
function addNumbers(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}
var sumResult = addNumbers(12, 13, 34);
var d = addNumbers(245, 23, 4);
console.log(`12 + 13 + 34 = ${sumResult}`);
console.log(`245 + 23 + 4 = ${d}`);
console.log(
    sumResult + " + " + d + " + 10" + " = " + addNumbers(sumResult, d, 10)
);

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    var area = length * width;
    return area;
}
console.log(" The area of rectangle is = " + areaOfRectangle(14, 6) + "cm");
console.log(" The area of rectangle is = " + areaOfRectangle(14, 16) + "cm");
console.log(" The area of rectangle is = " + areaOfRectangle(4, 16) + "cm");

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(lenght + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    var perimeter = 2 * (length + width);
    return perimeter;
}
console.log(
    " perimeter of this rectangle is = " + perimeterOfRectangle(14, 6) + "cm"
);
console.log(
    " perimeter of this rectangle is = " + perimeterOfRectangle(14, 16) + "cm"
);
console.log(
    " perimeter of this rectangle is = " + perimeterOfRectangle(4, 16) + "cm"
);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    var volume = length * width * height;
    return volume;
}
console.log(
    "the volume of rectangular prism is = " + volumeOfRectPrism(14, 6, 5) + "cm"
);
console.log(
    "the volume of rectangular prism is = " + volumeOfRectPrism(4, 16, 5) + "cm"
);
console.log(
    "the volume of rectangular prism is = " + volumeOfRectPrism(4, 6, 15) + "cm"
);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    var pi = Math.PI;
    return pi * radius * radius;
}
console.log("The area of this circle is = " + areaOfCircle(21).toFixed(2)); //toFixed is declare two decimal integer.
console.log("The area of this circle is = " + areaOfCircle(14).toFixed(3));
console.log("The area of this circle is = " + areaOfCircle(7).toFixed(1));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    var circum = 2 * Math.PI * r;
    return circum;
}
console.log("Circumference of the circle is = " + circumOfCircle(12));
console.log("Circumference of the circle is = " + circumOfCircle(8).toFixed(2));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function CalDensity(mass, volume) {
    var density = mass / volume;
    return density;
}
console.log("density of this substance is = " + CalDensity(14, 2) + "ml");
console.log("density of this substance is = " + CalDensity(25, 3) + "ml");
console.log("density of this substance is = " + CalDensity(36, 4) + "ml");

/* 10. Speed is calculated by dividing the total distance covered by a moving object divided
   by the total amount of time taken. Write a function which calculates a speed of a moving object, speed. */
function CalObjSpeed(DistanceTotal, TimeTotal) {
    var speed = DistanceTotal / TimeTotal;
    return speed;
}
console.log(
    "The object moves 150m within 10s. the speed is =  " +
    CalObjSpeed(150, 10) +
    "m/s"
);
console.log(
    "The object moves 300m within 25s. the speed is =  " +
    CalObjSpeed(300, 25) +
    "m/s"
);

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function CalWeight(mass, gravity) {
    var weight = mass * gravity;
    return weight;
}
console.log("The weight of this substance is = " + CalWeight(23, 12) + "kg");
console.log("The weight of this substance is = " + CalWeight(24, 13) + "kg");
console.log("The weight of this substance is = " + CalWeight(25, 14) + "kg");


/* 12. Temperature in ˚C can be converted to ˚F using this formula: ˚F = (˚C x 9 / 5) + 32. Write a function 
which convert ˚C to ˚F convertCelsiusToFahrenheit. */
function ConvertCelsiusToFahrenheit(C) {
    var Fahrenheit = (C * 9) / 5 + 32;
    return Fahrenheit;
}
console.log(
    "the 13˚C is equal to " + ConvertCelsiusToFahrenheit(13).toFixed(2) + "˚F ."
);
console.log(
    "the 23˚C is equal to " + ConvertCelsiusToFahrenheit(23).toFixed(2) + "˚F ."
);
console.log(
    "the -13˚C is equal to " + ConvertCelsiusToFahrenheit(-13).toFixed(2) + "˚F ."
);
// 12.1 this function convert the Fahrenheit to Celsius using this formula ˚C = (˚F - 32) * 5/9.
function ConvertFahrenheitToCelsius(F) {
    var Celsius = ((F - 32) * 5) / 9;
    return Celsius;
}
console.log(
    "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(55.4).toFixed(0) +
    "˚C ."
);
console.log(
    "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(73.4).toFixed(0) +
    "˚C ."
);
console.log(
    "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(8.59).toFixed(0) +
    "˚C ."
);

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
function BMI(weight, height) {
    var height = height / 100; // get height back to centimeter.
    var bmi = weight / (height * height);
    return bmi;
}
console.log("my Body Mass Index is = " + BMI(89, 174) + " kg/m2");
console.log("my Body Mass Index is = " + BMI(75, 162).toFixed(2) + " kg/m2");
console.log("my Body Mass Index is = " + BMI(45, 122).toFixed(2) + " kg/m2");

/* 13.1   BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obsess based the information given below.
- The same groups apply to both men and women.
- Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more */
function CalBMI(weight, height) {
    var height = height / 100; // get height back to centimeter.
    var bmi = weight / (height * height);
    if (bmi >= 30) {
        console.log(
            "your BMI is " + bmi.toFixed(2) + ".  👎 Obsess: BMI is 30 or more"
        );
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log(
            "your BMI is = " + bmi.toFixed(2) + ".  ✋ Overweight: BMI is 25 to 29.9"
        );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(
            "your BMI is = " +
            bmi.toFixed(2) +
            ".  👍 Normal weight: BMI is 18.5 to 24.9"
        );
    } else {
        console.log(
            "your BMI is = " +
            bmi.toFixed(2) +
            ".  Underweight: BMI is less than 18.5"
        );
    }
    return bmi;
}
CalBMI(69, 174);
CalBMI(79, 164);
CalBMI(89, 154);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    switch (month) {
        case "March":
        case "April":
        case "May":
            season = "spring";
            console.log("Now is spring!");
            break;
        case "June":
        case "July":
        case "August":
            season = "summer";
            console.log("Now is Summer!");
            break;
        case "September":
        case "October":
        case "November":
            season = "autumn";
            console.log("Now is Autumn!");
            break;
        case "December":
        case "January":
        case "February":
            season = "winter";
            console.log("Now is Winter!");
            break;
        default:
            season = "";
            console.log("I am in the air!!!");
            break;
    }
    return season;
}
checkSeason("March");
checkSeason("July");
checkSeason("September");
checkSeason("February");
checkSeason("12");

console.log(Date());

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maxiumum with out using Math.max method.
function findMax(n1, n2, n3) {
    var maximum;
    if (n1 > n2 && n1 > n3) {
        maximum = n1;
    } else if (n2 > n1 && n2 > n3) {
        maximum = n2;
    } else {
        maximum = n3;
    }
    return maximum;
}
console.log("the maximum number is = " + findMax(13, 12, 8));
console.log("the maximum number is = " + findMax(13, 22, 8));
console.log("the maximum number is = " + findMax(13, 22, 48));
console.log("the maximum number is = " + findMax(-13, -22, -48));

// 16. Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
    var x = (c - b) / a;
    return x;
}
console.log("X = " + solveLinEquation(5, 2, 22));
console.log("X = " + solveLinEquation(4, 1, 13));
console.log("X = " + solveLinEquation(8, 2, 18));

// 17. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// 18. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArr(arr) {
    for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index]);
    }
    console.log(`${arr}`);
}
printArr([23, 34, 24, 2, 45, 3]);
printArr([4, 346, 35, 2]);

// 19. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    console.log(`The value of x = ${x} and y = ${y}`);
    var m = x;
    x = y;
    y = m;
    return `BUT NOW the  x = ${x} and y = ${y}`;
}
console.log(swapValues(3, 6));
console.log(swapValues(23, 67));

// 20. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (dont’ use method).
function reverseArr(arr) {
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
        console.log(`${arr[i]}`);
    }
    return reverseArr;
}
console.log(reverseArr([1, 2, 3, 4, 5]));
console.log(reverseArr(["A", "B", "C", "D", "E"]));
console.log(reverseArr(["I", "II", "III", "IV", "V", "VI"]));

// 21.  Declare a function name capitalizeArray. It takes array as a parameter and it returns  the capitalized array.
function capitalizeArray(carsArr) {
    let arrCap = [];
    for (var i = 0; i < carsArr.length; i++) {
        arrCap.push(carsArr[i].toUpperCase());
    }
    return arrCap;
}
console.log(capitalizeArray(["toyota", "nissan", "mazda"]));

// 22. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const ITCos= [];
function addItems(array, item) {
    let newArray = array.slice();
    newArray.push(item);
    return newArray;
}
console.log(addItems(ITCos, "YLE"));
console.log(addItems(ITCos, "Samsung"));

// 23. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const Arr = [12, 13, 14, 15, 16, 17, 18, 19, 20];
function removeItem(array, index) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === index) {
            Arr.splice(i, 1);
        }
    }
    return Arr;
}
console.log(removeItem(Arr, 4));
console.log(Arr);

// 24. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers1(num1, num2, num3, num4, num5) {
    var sum = num1 + num2 + num3 + num4 + num5;
    return sum;
}
console.log(sumOfNumbers1(12, 12, 26, 50, 12));

// add all the items of an arry.
var s = [12, 13, 26, 50, 102, 202, 33, 7, 22, 8, 61, 1].reduce(adds);
function adds(a, b) {
    return a + b;
}
console.log(s);

// 25. & 26. Declare a function name sumOfOdds & sumOf Evens. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfNumbers() {
    var someNum = [23, 34, 45, 56, 67, 78, 90, 43, 76, 8];
    var OddsSum = 0;
    var EvensSum = 0;
    for (i = 0; i <= someNum.length - 1; i++) {
        if (someNum[i] % 2 == 0) {
            EvensSum += someNum[i];
            console.log(someNum[i] + " is even.");
        } else {
            OddsSum += someNum[i];
            console.log(someNum[i] + " is odd.");
        }
    }
    return { SumofEvenNumbers: EvensSum, SumofOddNumbers: OddsSum };
}
console.log(sumOfNumbers());


/***  Declare a function name someNums. It takes a number parameter and it recognize that the number is ODD or EVEN then push it to the array,
then reduce the numbers of this array with the help of another function name sumOfArr. */
let oddNums = [];
let evenNums = [];
function someNums(number) {
    if (number % 2 == 0) {
        console.log(number + ' is even.');
        evenNums.push(number);
    } else {
        console.log(number + ' is odd.');
        oddNums.push(number);
    }
}
function sumOfArr(arr) {
    return arr.reduce((a, b) => a + b);
}
// 27.Declare a function name evensAndOdds.It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensANDodds(countsNums) {
    return countsNums.length;
}
console.log(someNums(3));
console.log(someNums(2));
console.log(someNums(8));
console.log(someNums(9));
console.log(someNums(5));
console.log(someNums(1));
console.log(someNums(4));
console.log(someNums(6));
console.log(someNums(7));
console.log(oddNums);
console.log(evensANDodds(oddNums) + ' odd numbers are available in the list.');
console.log(evenNums);
console.log(evensANDodds(evenNums) + ' even numbers are available in the list.');
console.log(sumOfArr(oddNums));
console.log(sumOfArr(evenNums))


// 28. Write a funcition which takes any number of arguments and return the sum of the arguments
function sumTo(n) {// this function calculate the sum of n numbers.
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTo(6));
console.log(sumTo(50));

function sumToEvens(n) {// this function calculate the sum of evens of n numbers.
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumToEvens(8));
console.log(sumToEvens(5));

function sumToOdds(n) {// this function calculate the sum of evens of n numbers.
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumToOdds(9));
console.log(sumToOdds(6));


// 29. Writ a function which generates a randomUserIP.


// 30. Write a function which generates a randomMacAddress.


/* 31. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number.
 The function return the hexadecimal number. */
function randomHexaNumberGenerator() {
    let r = Math.floor(Math.random() * 256).toString(16);
    let g = Math.floor(Math.random() * 256).toString(16);
    let b = Math.floor(Math.random() * 256).toString(16);
    r = (r.length === 2) ? r : '0' + r;
    g = (g.length === 2) ? g : '0' + g;
    b = (b.length === 2) ? b : '0' + b;
    return `#${r}${g}${b}`;
}
console.log(randomHexaNumberGenerator());


function randomRGBcolorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}
console.log(randomRGBcolorGenerator());


// 32. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(l) {
    let charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = '';
    for (let i = 0; i < l; i++) {
        id += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return id;
}
console.log(userIdGenerator(7));

function finNumberPlate() { // this function generate the sample of finnish car numberplate randomly.
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let l = '';
    let n = '';
    for (let i = 0; i < 3; i++) {
        l += letters.charAt(Math.floor(Math.random() * letters.length));
        n += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    // for (let i = 0; i < 3; i++) {
    //   n += numbers.charAt(Math.floor(Math.random() * numbers.length));
    // }
    let numberPlate = `${l} - ${n}`;
    return numberPlate;
}
console.log(finNumberPlate());


//33. Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
let numberOfChars = 4;
let numberOfIds = 2;
function userIdGeneratedByUser(chars, ids) {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let userId = '';
    let userIdList = [];
    for (let i = 0; i < chars; i++) {
        userId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for (let i = 0; i < ids; i++) {
        userIdList.push(userId);
    }
    return userIdList;
}
console.log(userIdGeneratedByUser(numberOfChars, numberOfIds));


// 34.Write a function name rgbColorGenerator and it generates rgb colors.











// d.  Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
var cars = ["toyota", "mazda", "BMW", "benz", "nissan", "ford"];
function printArray(cars) {
    return cars.sort();
}
console.log(printArray(cars));

// e. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array(dont’ use method).
function reverseArray(cars) {
    return cars.reverse();
}
console.log(reverseArray(cars));

// g. Declare a function name removeItem. It returns array after removing an item
function removeItem(cars) {
    return cars;
}
removeItem(cars.splice(0, 2));
console.log(cars);

// h. Declare a function name addItem. It returns array after adding an item
function addItem(cars) {
    return cars;
}
addItem(cars.push("skuda"));
addItem(cars.push("chevrolet"));
console.log(cars);
addItem(cars.push("tiida"));
console.log(cars);

// i. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(num1, num2, num3, num4, num5) {
    var sum = num1 + num2 + num3 + num4 + num5;
    return sum;
}
console.log(sumOfNumbers(12, 12, 26, 50, 12));

// add all the items of an arry.
var s = [12, 13, 26, 50, 102, 202, 33, 7, 22, 8, 61, 1].reduce(adds);
function adds(a, b) {
    return a + b;
}
console.log(s);

// j. & k. Declare a function name sumOfOdds & sumOf Evens. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfNumbers() {
    var someNum = [23, 34, 45, 56, 67, 78, 90, 43, 76, 8];
    var OddsSum = 0;
    var EvensSum = 0;
    for (i = 0; i <= someNum.length - 1; i++) {
        if (someNum[i] % 2 == 0) {
            EvensSum += someNum[i];
            console.log(someNum[i] + " is even.");
        } else {
            OddsSum += someNum[i];
            console.log(someNum[i] + " is odd.");
        }
    }
    return { SumofEvenNumbers: EvensSum, SumofOddNumbers: OddsSum };
}
console.log(sumOfNumbers());

// 20. Declare a function name . It takes a number parameter and it counts number of evens and odds in the - number. output:
console.log("*********************");
function showSum(a, b, c, d, e, f) {
    var sum = a + b + c + d + e + f;
    return sum;
}
console.log(" the sum of 6 values = " + showSum(12, 2, 3, 4, 5, 60));
console.log(" the sum of 6 values = " + showSum(13, 4, 13, 64, 5, 1));

console.log("*********************");
// this function define the numbers of the array is odd or even and show them in console.
var someNos = [12, 7, 13, 34, 56, 7622, 1, 25, 37, 32, 58, 51];
function CalsomeNos() {
    for (i = 0; i < someNos.length; i++) {
        if (someNos[i] % 2 !== 0) {
            console.log(someNos[i] + " is odd.");
        } else {
            console.log(someNos[i] + " is even.");
        }
    }
}
CalsomeNos();
console.log("*********************");
function arrUnits() {
    let allEvens = 0;
    let allOdds = 0;
    for (i = 0; i <= someNos.length - 1; i++) {
        if (someNos[i] % 2 !== 0) {
            allOdds += someNos[i];
        } else {
            allEvens += someNos[i];
        }
    }
    return { allOdds, allEvens };
}
console.log(arrUnits());

console.log(" ");
