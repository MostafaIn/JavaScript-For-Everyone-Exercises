//
//  these are fundamental javascript exercises


/* Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one. */
// method 1.
const compareObjects = (obj, source) => Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
objectOne = {
    name: "mostafa",
    age: 34,
    country: "Afg"
};
objectTwo = {
    name: 'rohy',
    age: 32,
    country: 'fin'
};
objectThree = {
    // name:'rohy',
    age: 32,
    country: 'fin'
}
console.log(compareObjects(objectOne, objectTwo));
console.log(compareObjects(objectTwo, objectThree))

// method 2.
const obj_1 = { 'one': 1, 'two': 2, 'three': 3 };
const obj_2 = { 'one': 1, 'four': 4, 'five': 5 };
const obj_3 = { 'one': 1, 'two': 2, 'three': 3 };

areEqual = (obj1, obj2) => {
    let entries1 = Object.entries(obj1);
    let entries2 = Object.entries(obj2);
    let checkArray = [];
    entries1.map((item, itemIndex) => item.map((it) => {
        if (!entries2[itemIndex].includes(it)) {
            checkArray.push(false);
        }
    }))
    if (checkArray.includes(false)) {
        return false
    } else {
        return true
    };
}

console.log(areEqual(obj_1, obj_2));
console.log(areEqual(obj_1, obj_3));

/* 2. Write a JavaScript program to converts a specified number to an array of digits. */
const digitsArr = n => {
    const arr = [...`${n}`];
    arr.map(i => parseInt(i));
    return arr;
}
console.log(digitsArr("2"));
console.log(digitsArr(34567));
console.log(digitsArr('msdfg'));

/* 3. Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values. */
const filterOutArr = (arr, ...val) => {
    val.forEach(v => arr = arr.filter(i => i != v))
    return arr;
}
let a = [4, 6, 7, 84, 3, 16, 29, 5];
console.log(filterOutArr(a, 84));
let b = ['s', 'k', 'd', 'p', 'tt', 'el', 'o'];
console.log(filterOutArr(b, 'tt'));

/* 4. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations. */
const arrCombine = arr => {
    return arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
}
console.log(arrCombine([1, 2, 3]));

/* 5. Write a JavaScript program to extract out the values at the specified indexes from an specified array. */
arr5 = ['mosi', 'rohy', 'eddi', 'ebbi', 'essi']
const extractOutItem = (arr, index) => {
    return index.map(i => arr[i]);
}
console.log(extractOutItem(arr5, [2, 4, 0]));

/* 6. Write a JavaScript program to generate a random hexadecimal color code. */
const randomHexColorCode = () => {
    let n = (Math.random() * 0xffffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}
console.log(randomHexColorCode());

/* 7. Write a JavaScript program to removes non-printable ASCII characters from a given string. */


/* 8. Write a JavaScript program to replace the names of multiple object keys with the values provided. */
// const renameObjKey = (keyMap, obj) => {
//     Object.keys(obj).reduce((acc, key) => ({
//         ...acc,
//         ...{ [keyMap[key] || key]: obj[key] }
//     }),
//         {}
//     );
// }
// const obj = { name: 'mosi', age: 34, job: 'developer' };
// console.log('original Object is =>' + obj);
// console.log("=======================================================");
// const result = renameObjKey({ firstName: 'mosi', old: 34, position: 'developer' },obj);
// console.log('new object' + result);


/* 9. Write a JavaScript program to return the minimum-maximum value of an array, 
after applying the provided function to set comparing rule.*/
const MinMax = (arr, comparator = (a, b) => a + b) => arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
const arr9 = [3333333, 44, 55444, 244422, 1114444, 8866658, 477322, 5];
console.log(MinMax(arr9, (a, b) => b - a));

/* 10. Write a JavaScript function that returns true 
if the provided predicate function returns true for all elements in a collection, false otherwise. */
const bifurcate = (arr,filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcate([11,22,33,44,55],[true,true,false,true,false]));






